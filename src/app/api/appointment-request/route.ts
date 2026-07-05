import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/content";

export type AppointmentRequestPayload = {
  fullName: string;
  email: string;
  phone: string;
  preferredService: string;
  preferredDate: string;
  message: string;
  website?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function buildEmailHtml(data: AppointmentRequestPayload) {
  return `
    <h2>New Appointment Request — MRCS Website</h2>
    <p><strong>Full Name:</strong> ${data.fullName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Preferred Service:</strong> ${data.preferredService}</p>
    <p><strong>Preferred Date:</strong> ${data.preferredDate || "Not specified"}</p>
    <p><strong>Message:</strong></p>
    <p>${data.message.replace(/\n/g, "<br>")}</p>
  `;
}

function buildMailtoFallback(data: AppointmentRequestPayload) {
  const subject = encodeURIComponent(
    `Appointment Request — ${data.fullName}`
  );
  const body = encodeURIComponent(
    `Full Name: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phone}\nPreferred Service: ${data.preferredService}\nPreferred Date: ${data.preferredDate || "Not specified"}\n\nMessage:\n${data.message}`
  );
  return `mailto:${siteConfig.bookingEmail}?subject=${subject}&body=${body}`;
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as AppointmentRequestPayload;

    if (data.website) {
      return NextResponse.json({ success: true });
    }

    if (
      !data.fullName?.trim() ||
      !data.email?.trim() ||
      !data.phone?.trim() ||
      !data.preferredService?.trim() ||
      !data.message?.trim()
    ) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (!isValidEmail(data.email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const notifyEmail =
      process.env.APPOINTMENT_NOTIFY_EMAIL ?? siteConfig.bookingEmail;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        success: true,
        fallback: "mailto",
        mailto: buildMailtoFallback(data),
        message:
          "Email service is not configured. Opening your email app to send the request.",
      });
    }

    const resend = new Resend(apiKey);
    const from =
      process.env.RESEND_FROM ?? "MRCS Website <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from,
      to: [notifyEmail],
      replyTo: data.email,
      subject: `Appointment Request — ${data.fullName}`,
      html: buildEmailHtml(data),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          error: "Unable to send your request. Please email us directly.",
          fallback: "mailto",
          mailto: buildMailtoFallback(data),
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Appointment request error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
