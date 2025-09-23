import { NextRequest, NextResponse } from 'next/server';

type TallyOption = { id: string; text: string; [key: string]: any };
type TallyField = {
  key: string;
  label?: string;
  type?: string;
  value: any;
  options?: TallyOption[];
};

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();

    const data = payload?.data ?? {};
    const fields: TallyField[] = Array.isArray(data?.fields) ? data.fields : [];

    // 1) Extract submissionId
    const submissionId: string | undefined = data?.submissionId || data?.responseId;

    // 2) Extract email
    const email = extractEmail(fields, data)?.trim();

    // 3) Extract diner vs restaurant owner
    const isRestaurantOwner = determineIsRestaurantOwner(fields);

    // 4) Extract first and last name
    const firstName = extractFirstName(fields);
    const lastName = extractLastName(fields);

    if (!submissionId) {
      return NextResponse.json(
        { error: 'Missing submissionId in payload' },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        { error: 'Missing email in payload' },
        { status: 400 }
      );
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Attempt to update the contact by email identifier
    // Build attributes dynamically (omit LASTNAME if not provided)
    const attributes: Record<string, any> = {
      TALLY_SIGNUP_FORM_SUBMISSION_ID: submissionId,
      IS_RESTAURANT_OWNER: Boolean(isRestaurantOwner),
    };
    if (firstName) attributes.FIRSTNAME = firstName;
    if (lastName) attributes.LASTNAME = lastName;

    const updateRes = await fetch(
      `https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}?identifierType=email_id`,
      {
        method: 'PUT',
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json',
          'api-key': BREVO_API_KEY,
        },
        body: JSON.stringify({ attributes }),
      }
    );

    if (!updateRes.ok) {
      // If contact does not exist, create it with attributes
      if (updateRes.status === 404) {
        const createRes = await fetch('https://api.brevo.com/v3/contacts', {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'api-key': BREVO_API_KEY,
          },
          body: JSON.stringify({
            email,
            updateEnabled: true,
            attributes,
          }),
        });

        if (!createRes.ok) {
          const text = await createRes.text();
          console.error('Brevo create contact failed:', createRes.status, text);
          return NextResponse.json(
            { error: 'Failed to create contact in Brevo' },
            { status: 502 }
          );
        }
        // Parse id and add to list 5
        let createdId: number | null = null;
        try {
          const createdData = await createRes.json();
          if (createdData && typeof createdData.id === 'number') {
            createdId = createdData.id;
          }
        } catch {}

        if (createdId == null) {
          // Fallback: fetch by email
          createdId = await getBrevoContactIdByEmail(email, BREVO_API_KEY);
        }

        let listResult: 'added' | 'already' | 'skipped' = 'skipped';
        if (createdId != null) {
          listResult = await addContactIdToList(createdId, BREVO_API_KEY);
        }

        return NextResponse.json(
          {
            updated: false,
            created: true,
            email,
            submissionId,
            isRestaurantOwner: Boolean(isRestaurantOwner),
            contactId: createdId,
            list: listResult,
          },
          { status: 200 }
        );
      } else {
        const text = await updateRes.text();
        console.error('Brevo update contact failed:', updateRes.status, text);
        return NextResponse.json(
          { error: 'Failed to update contact in Brevo' },
          { status: 502 }
        );
      }
    }
    // Updated successfully; fetch id and add to list 5
    const updatedId = await getBrevoContactIdByEmail(email, BREVO_API_KEY);
    let listResult: 'added' | 'already' | 'skipped' = 'skipped';
    if (updatedId != null) {
      listResult = await addContactIdToList(updatedId, BREVO_API_KEY);
    }

    return NextResponse.json(
      {
        updated: true,
        created: false,
        email,
        submissionId,
        isRestaurantOwner: Boolean(isRestaurantOwner),
        firstName: firstName ?? null,
        lastName: lastName ?? null,
        contactId: updatedId,
        list: listResult,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling Tally webhook:', error);
    return NextResponse.json(
      { error: 'Failed to process webhook' },
      { status: 500 }
    );
  }
}

async function getBrevoContactIdByEmail(email: string, apiKey: string): Promise<number | null> {
  const res = await fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}?identifierType=email_id`, {
    method: 'GET',
    headers: { 'accept': 'application/json', 'api-key': apiKey },
  });
  if (!res.ok) return null;
  try {
    const data = await res.json();
    if (typeof data.id === 'number') return data.id;
  } catch {}
  return null;
}

async function addContactIdToList(id: number, apiKey: string): Promise<'added' | 'already'> {
  const listId = 5;
  const res = await fetch(`https://api.brevo.com/v3/contacts/lists/${listId}/contacts/add`, {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify({ ids: [id] }),
  });
  if (res.ok) return 'added';
  const text = await res.text();
  if (res.status === 400 && (text.includes('already in list') || text.includes('Contact already in list'))) {
    return 'already';
  }
  // If another error arises, bubble it up
  throw new Error(`Failed to add contact to list: ${res.status} ${text}`);
}

function extractEmail(fields: TallyField[], data?: any): string | undefined {
  // 1) Hidden field precedence via top-level hiddenFields
  const hiddenEmail = data?.hiddenFields?.email;
  if (typeof hiddenEmail === 'string' && /@/.test(hiddenEmail)) {
    return hiddenEmail;
  }

  // 2) Hidden field inside fields array (type: HIDDEN_FIELDS, label: email)
  const hiddenInline = fields.find(
    (f) =>
      (f.type || '').toUpperCase().includes('HIDDEN') &&
      (f.label || '').trim().toLowerCase() === 'email' &&
      typeof f.value === 'string' && /@/.test(f.value)
  );
  if (hiddenInline?.value) return String(hiddenInline.value);

  // 3) Explicit email input fields (label contains 'email' or type includes EMAIL)
  const emailField = fields.find(
    (f) =>
      typeof f?.value === 'string' &&
      /@/.test(f.value) &&
      ((f.label || '').toLowerCase().includes('email') || (f.type || '').toUpperCase().includes('EMAIL'))
  );
  if (emailField?.value) return String(emailField.value);

  // 4) Hidden fields sometimes package an object with { email: "..." }
  const hiddenFieldObj = fields.find(
    (f) => (f.type || '').toUpperCase().includes('HIDDEN') && f.value && typeof f.value === 'object'
  );
  if (hiddenFieldObj && hiddenFieldObj.value) {
    const obj = hiddenFieldObj.value as Record<string, any>;
    if (typeof obj.email === 'string' && /@/.test(obj.email)) return obj.email;
    // Fallback: scan values for an email-like string
    for (const k of Object.keys(obj)) {
      const val = obj[k];
      if (typeof val === 'string' && /@/.test(val)) return val;
    }
  }

  // 5) Final fallback: any string value with @
  const anyEmail = fields.find((f) => typeof f?.value === 'string' && /@/.test(f.value));
  return anyEmail?.value ? String(anyEmail.value) : undefined;
}

function determineIsRestaurantOwner(fields: TallyField[]): boolean {
  // Find a MC field that includes an option with text 'Restaurant Owner'
  for (const f of fields) {
    if ((f.type || '').toUpperCase().includes('MULTIPLE_CHOICE') && Array.isArray(f.options)) {
      const ownerOption = f.options.find((o) => o.text.trim().toLowerCase() === 'restaurant owner');
      if (ownerOption) {
        // value can be array of selected option ids
        const selected: string[] = Array.isArray(f.value) ? f.value : [];
        if (selected.includes(ownerOption.id)) {
          return true;
        }
      }
    }
  }
  return false;
}

function extractFirstName(fields: TallyField[]): string | undefined {
  const candidates = ['first name', 'firstname', 'first'];
  for (const f of fields) {
    const label = (f.label || '').trim().toLowerCase();
    if (typeof f.value === 'string' && f.value.trim().length > 0) {
      if (candidates.includes(label)) return f.value.trim();
      // Some Tally exports include the label in variants; use contains
      if (candidates.some((c) => label.includes(c))) return f.value.trim();
    }
  }
  return undefined;
}

function extractLastName(fields: TallyField[]): string | undefined {
  const candidates = ['last name', 'lastname', 'last'];
  for (const f of fields) {
    const label = (f.label || '').trim().toLowerCase();
    if (typeof f.value === 'string' && f.value.trim().length > 0) {
      if (candidates.includes(label)) return f.value.trim();
      if (candidates.some((c) => label.includes(c))) return f.value.trim();
    }
  }
  return undefined;
}


