"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send, Shield } from "lucide-react";
import { appointmentServices, siteConfig } from "@/lib/content";

const inputClass =
  "w-full min-h-[48px] rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-navy shadow-sm transition placeholder:text-gray-muted focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/25 md:py-3.5";

const labelClass = "mb-1.5 block text-sm font-semibold text-navy md:mb-2";

export default function AppointmentRequestForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      fullName: String(formData.get("fullName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      preferredService: String(formData.get("preferredService") ?? ""),
      preferredDate: String(formData.get("preferredDate") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    try {
      const res = await fetch("/api/appointment-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.mailto) {
          window.location.href = data.mailto;
          setStatus("success");
          return;
        }
        throw new Error(data.error ?? "Unable to send request.");
      }

      if (data.fallback === "mailto" && data.mailto) {
        window.location.href = data.mailto;
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please email us directly."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        id="appointment-form"
        className="scroll-mt-36 max-md:scroll-mt-32 md:scroll-mt-28"
      >
        <div className="overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-xl shadow-navy/10">
          <div className="bg-navy px-6 py-5 md:px-8">
            <h2 className="text-xl font-bold text-white">Request Received</h2>
          </div>
          <div className="px-6 py-10 text-center md:px-8">
            <CheckCircle2
              className="mx-auto h-14 w-14 text-teal"
              aria-hidden
            />
            <p className="mt-4 text-lg text-gray-body">
              Thank you! We&apos;ll respond promptly. You can also reach us at{" "}
              <a
                href={`mailto:${siteConfig.bookingEmail}`}
                className="font-semibold text-teal hover:underline"
              >
                {siteConfig.bookingEmail}
              </a>
              .
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-8 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-navy transition hover:bg-teal-light"
            >
              Submit another request
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      id="appointment-form"
      className="scroll-mt-36 max-md:scroll-mt-32 md:scroll-mt-28"
    >
      <div className="overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-xl shadow-navy/10">
        <div className="border-b border-white/10 bg-gradient-to-r from-navy to-navy-light px-4 py-5 sm:px-6 md:px-8 md:py-6">
          <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-start md:justify-between md:gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-teal">
                Appointment Request
              </p>
              <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl md:text-3xl">
                Request an Appointment
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/80">
                Complete the form below and Christopher will follow up within
                one business day. All information is kept confidential.
              </p>
            </div>
            <div className="flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 md:px-4 md:py-2">
              <Shield className="h-4 w-4 shrink-0 text-teal" aria-hidden />
              Secure &amp; confidential
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 p-4 sm:space-y-6 sm:p-6 md:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <label htmlFor="fullName" className={labelClass}>
                Full Name <span className="text-teal">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                autoComplete="name"
                className={inputClass}
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                Email <span className="text-teal">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={inputClass}
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone <span className="text-teal">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                className={inputClass}
                placeholder="405-456-9796"
              />
            </div>
            <div>
              <label htmlFor="preferredService" className={labelClass}>
                Preferred Service <span className="text-teal">*</span>
              </label>
              <select
                id="preferredService"
                name="preferredService"
                required
                defaultValue=""
                className={`${inputClass} cursor-pointer`}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {appointmentServices.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="preferredDate" className={labelClass}>
                Preferred Date
              </label>
              <input
                id="preferredDate"
                name="preferredDate"
                type="date"
                className={inputClass}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className={labelClass}>
                Message <span className="text-teal">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className={`${inputClass} resize-y`}
                placeholder="Tell us what you're looking for, your availability, insurance questions, or anything else we should know..."
              />
            </div>
          </div>

          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden
          />

          {status === "error" && (
            <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
              {errorMessage}{" "}
              <a
                href={`mailto:${siteConfig.bookingEmail}`}
                className="font-semibold underline"
              >
                Email {siteConfig.bookingEmail}
              </a>
            </p>
          )}

          <div className="flex flex-col gap-4 border-t border-gray-200 pt-5 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
            <p className="text-xs leading-relaxed text-gray-body">
              By submitting, you agree to be contacted about scheduling. Backup:{" "}
              <a
                href={`mailto:${siteConfig.bookingEmail}`}
                className="font-medium text-teal hover:underline"
              >
                {siteConfig.bookingEmail}
              </a>
            </p>
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-teal px-8 py-4 text-base font-semibold text-navy shadow-lg shadow-teal/25 transition hover:bg-teal-light disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-10"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
                  Sending…
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" aria-hidden />
                  Request Appointment
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
