import Link from "next/link";
import { Mail, Phone, MapPin, Shield } from "lucide-react";
import { siteConfig, trustBadges, clinician } from "@/lib/content";
import { footerLinks, navLinks } from "@/lib/constants";

const serviceLinks =
  navLinks.find((link) => link.label === "Services")?.children ?? [];

export default function Footer() {
  const year = 2026;

  return (
    <footer className="bg-navy-dark text-white">
      <div className="container-wide section-padding !pb-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-4">
            <p className="text-lg font-extrabold leading-snug tracking-tight sm:text-xl">
              <span className="text-teal">Maafa</span> Recovery Counseling
              Services
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-white/50">
              {siteConfig.shortName} · Licensed in Oklahoma &amp; Texas
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
              Identity-conscious, trauma-responsive psychotherapy — in-person in
              the Stratford/Ada area and secure telehealth across Oklahoma and
              Texas.
            </p>
            <Link
              href={siteConfig.bookingUrl}
              className="mt-6 inline-flex min-h-[44px] items-center rounded-full bg-teal px-6 py-2.5 text-sm font-semibold text-navy transition hover:bg-teal-light"
            >
              Book an Appointment
            </Link>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-teal">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition hover:text-teal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-teal">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition hover:text-teal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-teal">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-2.5 text-sm text-white/75 transition hover:text-teal"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal/80" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-start gap-2.5 text-sm text-white/75 transition hover:text-teal"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal/80" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2.5 text-sm text-white/75">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal/80" />
                  {siteConfig.address}
                </span>
              </li>
              <li>
                <span className="flex items-start gap-2.5 text-sm text-white/75">
                  <Shield className="mt-0.5 h-4 w-4 shrink-0 text-teal/80" />
                  {clinician.shortName}, LPC
                </span>
              </li>
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-white/50">
              Insurance: {trustBadges.join(" · ")}
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/50">
              &copy; {year} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-xs text-white/50">
              Licensed Professional Counselor · Oklahoma &amp; Texas
            </p>
          </div>
          <p className="mt-4 text-center text-[11px] text-white/35">
            Website built by{" "}
            <a
              href="https://v0-novapulse-ai-landing-page.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/45 underline-offset-2 transition hover:text-teal/70 hover:underline"
            >
              NovaPulse AI
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
