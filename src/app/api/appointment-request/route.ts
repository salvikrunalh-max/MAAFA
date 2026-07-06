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

const NOTIFY_EMAIL = "cnash50@gmail.com";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function hasResendKey() {
  const key = process.env.RESEND_API_KEY?.trim();
  if (!key) return false;
  if (key === "re_your_api_key_here") return false;
  return key.startsWith("re_");
}

function buildEmailHtml(data: AppointmentRequestPayload) {
  return `
    <h2>New Appointment Request — MRCS Website</h2>
    <p><strong>Full Name:</strong> ${escapeHtml(data.fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
    <p><strong>Preferred Service:</strong> ${escapeHtml(data.preferredService)}</p>
    <p><strong>Preferred Date:</strong> ${escapeHtml(data.preferredDate || "Not specified")}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
  `;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function logSubmission(data: AppointmentRequestPayload) {
  console.info("[appointment-request] New submission:", {
    fullName: data.fullName,
    email: data.email,
    phone: data.phone,
    preferredService: data.preferredService,
    preferredDate: data.preferredDate || "Not specified",
    message: data.message,
    notifyEmail: NOTIFY_EMAIL,
  });
}

async function sendViaResend(data: AppointmentRequestPayload) {
  const apiKey = process.env.RESEND_API_KEY!.trim();
  const resend = new Resend(apiKey);
  const from =
    process.env.RESEND_FROM ?? "MRCS Website <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to: [process.env.APPOINTMENT_NOTIFY_EMAIL ?? NOTIFY_EMAIL],
    replyTo: data.email,
    subject: `Appointment Request — ${data.fullName}`,
    html: buildEmailHtml(data),
  });

  if (error) {
    console.error("[appointment-request] Resend error:", error);
    return false;
  }

  return true;
}

export async function POST(request: Request) {
  let data: AppointmentRequestPayload;

  try {
    data = (await request.json()) as AppointmentRequestPayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid request. Please try again." },
      { status: 400 }
    );
  }

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

  logSubmission(data);

  let emailSent = false;

  if (hasResendKey()) {
    try {
      emailSent = await sendViaResend(data);
    } catch (err) {
      console.error("[appointment-request] Resend exception:", err);
      emailSent = false;
    }
  }

  return NextResponse.json({
    success: true,
    emailSent,
  });
}
