import { NextResponse } from "next/server";
import { Resend } from "resend";

import { adminEmail } from "@/src/lib/email/admin-template";
import { customerEmail } from "@/src/lib/email/customer-template";
import { COMPANY } from "@/src/lib/email/branding";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, location, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: "Missing required fields.",
        },
        {
          status: 400,
        }
      );
    }

    await Promise.all([
      // Email to you
      resend.emails.send({
        from: `Enquiry <services@coulsonvisuals.co.uk>`,
        to: COMPANY.email,
        replyTo: email,
        subject: `New Website Enquiry - ${name}`,
        html: adminEmail({
          name,
          email,
          location,
          message,
        }),
      }),

      // Confirmation email
      resend.emails.send({
        from: `${COMPANY.name} <services@coulsonvisuals.co.uk>`,
        to: email,
        subject: "We've received your enquiry",
        html: customerEmail({
          name,
          email,
          location,
          message,
        }),
      }),
    ]);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        error: "Failed to send email.",
      },
      {
        status: 500,
      }
    );
  }
}