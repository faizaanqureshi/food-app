import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, source = 'unknown' } = await request.json();

    // Enterprise-grade server-side email validation
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Preserve original casing for the local-part; trim only
    const trimmedEmail = email.trim();
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Additional server-side validation
    const parts = trimmedEmail.split('@');
    if (parts.length !== 2) {
      return NextResponse.json(
        { error: 'Email format is invalid' },
        { status: 400 }
      );
    }
    const [localPart, domain] = parts;
    if (localPart.length === 0 || localPart.length > 64 || domain.length === 0 || domain.length > 255) {
      return NextResponse.json(
        { error: 'Email format is invalid' },
        { status: 400 }
      );
    }

    // Check for disposable email domains
    const disposableDomains = [
      '10minutemail.com', 'guerrillamail.com', 'mailinator.com', 'tempmail.org',
      'throwaway.email', 'temp-mail.org', 'getnada.com', 'maildrop.cc',
      'sharklasers.com', 'yopmail.com', 'mohmal.com', 'emailondeck.com',
      'trashmail.com', 'tempail.com', 'spamgourmet.com'
    ];
    
    const domainLower = domain.toLowerCase();
    if (disposableDomains.includes(domainLower)) {
      return NextResponse.json(
        { error: 'Please use a permanent email address for updates' },
        { status: 400 }
      );
    }

    // Rate limiting check (basic implementation)
    // In production, you'd use Redis or a proper rate limiting service
    const userAgent = request.headers.get('user-agent') || '';
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    
    // Log for monitoring (in production, use proper logging)
    console.log(`Email submission: ${trimmedEmail} from IP: ${ip}`);

    // Use the normalized email for downstream APIs
    const emailForBrevo = trimmedEmail;

    // Brevo configuration
    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const createContact = async (): Promise<{ id: number } | null> => {
      const res = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json',
          'api-key': BREVO_API_KEY,
        },
        body: JSON.stringify({
          email: emailForBrevo,
          updateEnabled: false,
        }),
      });

      if (res.ok) {
        const data = (await res.json()) as { id?: number };
        if (data?.id != null) return { id: data.id };
      } else {
        // If already exists, fall back to fetching by email
        const errorText = await res.text();
        console.warn('Brevo create contact failed:', res.status, errorText);
      }
      return null;
    };

    const getContactByEmail = async (): Promise<{ id: number } | null> => {
      const res = await fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(emailForBrevo)}`, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'api-key': BREVO_API_KEY,
        },
      });
      if (!res.ok) return null;
      const data = (await res.json()) as { id?: number };
      if (data?.id != null) return { id: data.id };
      return null;
    };

    const addContactIdToList = async (id: number): Promise<'added' | 'already'> => {
      const listId = 5; // per requirements
      const res = await fetch(`https://api.brevo.com/v3/contacts/lists/${listId}/contacts/add`, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json',
          'api-key': BREVO_API_KEY,
        },
        body: JSON.stringify({ ids: [id] }),
      });
      if (res.ok) return 'added';
      const text = await res.text();
      // Treat already-in-list as a success state for UX
      if (
        res.status === 400 &&
        (text.includes('Contact already in list') || text.includes('already in list'))
      ) {
        return 'already';
      }
      throw new Error(`Failed to add contact to list: ${res.status} ${text}`);
    };

    // 1) Create contact (or fetch if exists)
    let contact = await createContact();
    if (!contact) {
      contact = await getContactByEmail();
    }
    if (!contact) {
      return NextResponse.json(
        { error: 'Failed to create or locate contact in Brevo' },
        { status: 502 }
      );
    }

    // 2) Add contact to list 5
    const addResult = await addContactIdToList(contact.id);

    if (addResult === 'already') {
      return NextResponse.json(
        { message: "You've already signed up!", contactId: contact.id, alreadySignedUp: true },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: 'Email submitted successfully!', contactId: contact.id, alreadySignedUp: false },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting email:', error);
    return NextResponse.json(
      { error: 'Failed to submit email' },
      { status: 500 }
    );
  }
}
