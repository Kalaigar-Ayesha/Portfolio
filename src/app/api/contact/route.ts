import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface InquiryPayload {
  id: string;
  name: string;
  email: string;
  company?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  contactMethod?: string;
  message: string;
  timestamp: string;
  clientIp?: string;
  userAgent?: string;
}

function sanitize(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      name, 
      email, 
      company, 
      service, 
      budget, 
      timeline, 
      contactMethod, 
      message,
      honeypot
    } = body;

    // Bot detection via honeypot field
    if (honeypot && String(honeypot).trim().length > 0) {
      return NextResponse.json(
        { error: 'Automated submission rejected.' },
        { status: 400 }
      );
    }

    // Strict validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Please provide your name.' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Business email is required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: 'Please enter a valid work email address.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Please briefly describe your project requirements (at least 10 characters).' },
        { status: 400 }
      );
    }

    // Build unique inquiry record with sanitized inputs
    const inquiryId = `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const sanitizedName = sanitize(name.trim());
    const newInquiry: InquiryPayload = {
      id: inquiryId,
      name: sanitizedName,
      email: email.trim().toLowerCase(),
      company: company ? sanitize(String(company).trim()) : 'Independent / Unspecified',
      service: sanitize(service || 'General DevOps Consultation'),
      budget: sanitize(budget || 'Not specified'),
      timeline: sanitize(timeline || 'Flexible'),
      contactMethod: sanitize(contactMethod || 'Email'),
      message: sanitize(message.trim()),
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || 'Unknown'
    };

    // Real persistence: write to local data directory (in Vercel serverless, use /tmp)
    const baseDir = process.env.VERCEL ? '/tmp' : process.cwd();
    const dataDir = path.join(baseDir, 'data');
    const inquiriesFile = path.join(dataDir, 'inquiries.json');

    try {
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      let existingInquiries: InquiryPayload[] = [];
      if (fs.existsSync(inquiriesFile)) {
        const fileContent = fs.readFileSync(inquiriesFile, 'utf-8');
        try {
          existingInquiries = JSON.parse(fileContent);
        } catch {
          existingInquiries = [];
        }
      }

      existingInquiries.push(newInquiry);
      fs.writeFileSync(inquiriesFile, JSON.stringify(existingInquiries, null, 2), 'utf-8');
    } catch (fsErr) {
      console.error('[Inquiry Storage Error]:', fsErr);
      // Non-fatal logging: still process so client gets receipt
    }

    console.log('[New DevOps Client Lead Received]:', {
      inquiryId,
      name: newInquiry.name,
      email: newInquiry.email,
      company: newInquiry.company,
      service: newInquiry.service,
      budget: newInquiry.budget,
      contactMethod: newInquiry.contactMethod,
      timestamp: newInquiry.timestamp
    });

    return NextResponse.json(
      { 
        success: true, 
        inquiryId,
        message: `Thank you, ${newInquiry.name}! Your project inquiry has been securely registered (Ref: #${inquiryId.slice(-6).toUpperCase()}). K. Ayesha will review your requirements and reply via ${newInquiry.contactMethod} within 24 business hours.` 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Server could not process your submission. Please reach out directly to K. Ayesha at kalaigarayesha@gmail.com' },
      { status: 500 }
    );
  }
}
