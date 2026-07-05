"use client";

import {
  Calendar,
  ExternalLink,
  LogIn,
  Mail,
  Phone,
  UserPlus,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/content";

export default function SimplePracticeWidget() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-xl shadow-navy/10">
      <div className="border-b border-white/10 bg-gradient-to-r from-navy to-navy-light px-6 py-6 md:px-8">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/20">
            <Calendar className="h-6 w-6 text-teal" aria-hidden />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal">
              Online Calendar
            </p>
            <h3 className="text-xl font-bold text-white md:text-2xl">
              Book via SimplePractice
            </h3>
            <p className="mt-1 text-sm text-white/75">
              Secure scheduling portal — view availability and request a time
              online.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 p-6 md:grid-cols-2 md:p-8">
        <a
          href={siteConfig.simplePracticeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col rounded-xl border border-gray-300 bg-cream p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-md"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal/10 text-teal transition group-hover:bg-teal group-hover:text-white">
            <UserPlus className="h-5 w-5" aria-hidden />
          </div>
          <h4 className="mt-4 text-lg font-semibold text-navy">
            I&apos;m a New Client
          </h4>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-body">
            Request your first appointment through our secure SimplePractice
            portal. Choose a service, location, and preferred time.
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal">
            Open scheduling portal
            <ExternalLink className="h-4 w-4" aria-hidden />
          </span>
        </a>

        <a
          href={siteConfig.simplePracticeSignInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col rounded-xl border border-gray-300 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-md"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy/5 text-navy transition group-hover:bg-navy group-hover:text-white">
            <LogIn className="h-5 w-5" aria-hidden />
          </div>
          <h4 className="mt-4 text-lg font-semibold text-navy">
            I&apos;m an Existing Client
          </h4>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-body">
            Sign in to your client portal to request appointments, view
            upcoming sessions, and manage your care.
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal">
            Sign in to portal
            <ExternalLink className="h-4 w-4" aria-hidden />
          </span>
        </a>
      </div>

      <div className="flex flex-col gap-4 border-t border-gray-200 bg-gray-soft px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p className="text-sm text-gray-body">
          <span className="font-semibold text-navy">Need help?</span> Call, email,
          or open the full calendar in a new tab.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${siteConfig.bookingEmail}`}
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-navy transition hover:border-teal hover:text-teal"
          >
            <Mail className="h-4 w-4 shrink-0" aria-hidden />
            Email
          </a>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-navy transition hover:border-teal hover:text-teal"
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden />
            Call
          </a>
          <Button href={siteConfig.simplePracticeUrl} external className="!px-5 !py-2 !text-sm">
            <span className="inline-flex items-center gap-2">
              <ExternalLink className="h-4 w-4" aria-hidden />
              Open Calendar
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
