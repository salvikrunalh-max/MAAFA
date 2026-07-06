import { pageMetadata } from "@/lib/seo";
import { Mail, Phone, MapPin, Clock, CalendarCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AppointmentRequestForm from "@/components/booking/AppointmentRequestForm";
import SimplePracticeWidget from "@/components/booking/SimplePracticeWidget";
import { siteConfig, siteImages } from "@/lib/content";
import Image from "next/image";
import { IMAGE_QUALITY, IMAGE_SIZES } from "@/lib/images";

export const metadata = pageMetadata({
  title: "Book a Therapist | Ada & Stratford OK + Texas Telehealth",
  description:
    "Book counseling in Oklahoma or Texas today. Maafa Recovery — in-person Stratford & Ada, OK + secure telehealth statewide. Call 405-456-9796 or request an appointment online.",
  keywords: [
    "book therapist Oklahoma",
    "counseling appointment Ada OK",
    "therapist Stratford Oklahoma",
    "telehealth counseling Texas",
    "schedule LPC Oklahoma Texas",
    "trauma therapy appointment OK",
    "EMDR therapist near me Oklahoma",
  ],
});

export default function ContactPage() {
  return (
    <>
      {/* Compact header — form visible above the fold */}
      <section className="relative overflow-hidden bg-navy pt-28 pb-32 max-md:pt-24 max-md:pb-28 md:pt-32 md:pb-36">
        <div className="absolute inset-0 -z-0" aria-hidden>
          <Image
            src={siteImages.office2}
            alt=""
            fill
            className="object-cover object-center"
            sizes={IMAGE_SIZES.hero}
            quality={IMAGE_QUALITY.section}
          />
          <div className="absolute inset-0 bg-hero-gradient" />
        </div>

        <div className="overlay-text container-wide relative z-10 px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal sm:text-sm">
              Oklahoma &amp; Texas
            </p>
            <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              Book Your Appointment
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
              Request counseling in Stratford, Ada, or via telehealth across
              Oklahoma and Texas. We respond within one business day.
            </p>
            <a
              href={siteConfig.phoneHref}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-navy transition hover:bg-teal-light sm:text-base"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Primary appointment form — overlaps header for prominence */}
      <section className="relative z-20 -mt-24 max-md:-mt-20 md:-mt-28">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-start lg:gap-10">
            {/* Trust sidebar — desktop only */}
            <aside className="hidden lg:block lg:pt-6">
              <div className="sticky top-28 space-y-5">
                <div className="rounded-2xl border border-teal/30 bg-white p-6 shadow-lg shadow-navy/5">
                  <CalendarCheck
                    className="h-8 w-8 text-teal"
                    aria-hidden
                  />
                  <h2 className="mt-3 text-lg font-bold text-navy">
                    Why book with MRCS?
                  </h2>
                  <ul className="mt-4 space-y-3 text-sm text-gray-body">
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                      Licensed LPC in Oklahoma &amp; Texas
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                      In-person Stratford / Ada + telehealth
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                      EMDR, IFS, couples &amp; family therapy
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                      Most major insurance accepted
                    </li>
                  </ul>
                </div>
                <div className="grid gap-3">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 text-sm transition hover:border-teal/40 hover:shadow-md"
                  >
                    <Mail className="h-5 w-5 shrink-0 text-teal" aria-hidden />
                    <span className="text-gray-body">{siteConfig.email}</span>
                  </a>
                  <a
                    href={siteConfig.phoneHref}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 text-sm transition hover:border-teal/40 hover:shadow-md"
                  >
                    <Phone className="h-5 w-5 shrink-0 text-teal" aria-hidden />
                    <span className="font-semibold text-navy">
                      {siteConfig.phone}
                    </span>
                  </a>
                </div>
              </div>
            </aside>

            {/* Form — hero element */}
            <div className="ring-4 ring-teal/15 rounded-2xl">
              <AppointmentRequestForm />
            </div>
          </div>

          {/* Mobile contact cards */}
          <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-6 lg:hidden">
            <div className="content-card-white text-center max-md:!p-4 sm:!p-5">
              <Mail className="mx-auto h-6 w-6 text-teal" aria-hidden />
              <p className="mt-3 text-sm font-semibold text-navy">Email</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-1 block text-sm text-teal hover:underline"
              >
                {siteConfig.email}
              </a>
            </div>
            <div className="content-card-white text-center max-md:!p-4 sm:!p-5">
              <Phone className="mx-auto h-6 w-6 text-teal" aria-hidden />
              <p className="mt-3 text-sm font-semibold text-navy">Phone</p>
              <a
                href={siteConfig.phoneHref}
                className="mt-1 block text-sm text-teal hover:underline"
              >
                {siteConfig.phone}
              </a>
            </div>
            <div className="content-card-white text-center max-md:!p-4 sm:!p-5">
              <Clock className="mx-auto h-6 w-6 text-teal" aria-hidden />
              <p className="mt-3 text-sm font-semibold text-navy">
                Availability
              </p>
              <p className="mt-1 text-sm text-gray-body">
                In-person &amp; telehealth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SimplePractice online calendar */}
      <section
        id="booking"
        className="section-padding scroll-mt-28 bg-cream max-md:!pt-16"
      >
        <div className="container-wide">
          <SectionHeading
            align="left"
            eyebrow="Prefer to schedule online?"
            title="Online Calendar"
            description="Use our secure SimplePractice portal to view availability and request a time — available for new and returning clients in Oklahoma and Texas."
          />
          <div className="mt-10">
            <SimplePracticeWidget />
          </div>
        </div>
      </section>

      {/* Contact details + map */}
      <section className="section-padding bg-gray-soft">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="content-card-white">
              <h3 className="text-xl font-bold text-navy">Visit Us</h3>
              <ul className="mt-6 space-y-5">
                <li className="flex items-start gap-3 text-gray-body">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  <span>{siteConfig.address}</span>
                </li>
                <li className="flex items-start gap-3 text-gray-body">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  <span>
                    In-person: Stratford / Ada area
                    <br />
                    Telehealth: Oklahoma &amp; Texas
                  </span>
                </li>
              </ul>
              <div className="mt-6 rounded-xl border border-gray-200 bg-cream p-5">
                <p className="text-sm font-semibold text-navy">
                  Accepted Insurance
                </p>
                <p className="mt-2 text-sm text-gray-body">
                  Headway, WebTPA, Medicare, Aetna, Tricare, and more. Contact
                  us to verify your specific plan.
                </p>
              </div>
            </div>

            <div>
              <SectionHeading
                align="left"
                title="Office Location"
                description="Serving the Stratford, Ada, and surrounding Oklahoma communities — plus telehealth across Texas."
              />
              <div className="content-card-white mt-6 overflow-hidden p-0">
                <iframe
                  title="Maafa Recovery Counseling Services location map"
                  src="https://maps.google.com/maps?q=12736+County+Road+3450+Stratford+OK+74872&output=embed"
                  className="h-80 w-full md:h-96"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
