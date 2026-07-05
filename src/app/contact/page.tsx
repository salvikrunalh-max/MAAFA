import { pageMetadata } from "@/lib/seo";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import AppointmentRequestForm from "@/components/booking/AppointmentRequestForm";
import SimplePracticeWidget from "@/components/booking/SimplePracticeWidget";
import { siteConfig, siteImages } from "@/lib/content";

export const metadata = pageMetadata({
  title: "Contact & Book an Appointment",
  description:
    "Contact Maafa Recovery Counseling Services in Oklahoma and Texas. Book online or call 405-456-9796. In-person Stratford, OK + secure telehealth.",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact & Intake"
        description="Request an appointment online or reach out directly. We respond promptly to all inquiries."
        image={siteImages.office2}
      />

      {/* Primary appointment form — full prominence */}
      <section className="section-padding bg-gray-soft max-md:!pt-12 max-md:!pb-16">
        <div className="container-wide max-md:px-4">
          <div className="mx-auto max-w-4xl">
            <AppointmentRequestForm />
          </div>

          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 max-md:gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-6">
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
              <p className="mt-3 text-sm font-semibold text-navy">Availability</p>
              <p className="mt-1 text-sm text-gray-body">
                In-person &amp; telehealth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SimplePractice online calendar */}
      <section id="booking" className="section-padding scroll-mt-28 bg-cream">
        <div className="container-wide">
          <SectionHeading
            align="left"
            eyebrow="Prefer to schedule online?"
            title="Online Calendar"
            description="Use our secure SimplePractice portal to view availability and request a time — available for new and returning clients."
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
                description="Serving the Stratford, Ada, and surrounding Oklahoma communities."
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
