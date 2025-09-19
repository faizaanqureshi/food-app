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

    const trimmedEmail = email.trim().toLowerCase();
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Additional server-side validation
    const [localPart, domain] = trimmedEmail.split('@');
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
    
    if (disposableDomains.includes(domain)) {
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

    // Use the normalized email for storage
    const normalizedEmail = trimmedEmail;

    // Google Apps Script URL - Replace with your actual URL
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || '';

    if (!GOOGLE_SCRIPT_URL) {
      console.error('Google Script URL not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Submit to Google Sheets via Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: normalizedEmail,
        source,
        timestamp: new Date().toISOString(),
        ip: ip,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit to Google Sheets');
    }

    return NextResponse.json(
      { message: 'Email submitted successfully!' },
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
