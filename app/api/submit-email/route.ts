import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, source = 'unknown' } = await request.json();

    // Server-side email validation
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Additional server-side validation
    const [localPart, domain] = email.split('@');
    if (localPart.length === 0 || localPart.length > 64 || domain.length === 0 || domain.length > 255) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

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
        email,
        source,
        timestamp: new Date().toISOString(),
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
