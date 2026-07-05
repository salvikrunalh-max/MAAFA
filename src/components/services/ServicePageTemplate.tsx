import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Service } from "@/lib/content";
import { siteConfig } from "@/lib/content";

type ServicePageTemplateProps = {
  service: Service;
};

export function generateServiceMetadata(service: Service): Metadata {
  return {
    title: service.title,
    description: `${service.description} Serving Oklahoma and Texas — in-person and telehealth.`,
    keywords: service.keywords,
  };
}

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <>
      <PageHero
        title={service.title}
        description={service.description}
        image={service.heroImage}
      >
        <div className="mt-8">
          <Button href={siteConfig.bookingUrl}>Request Appointment</Button>
        </div>
      </PageHero>

      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              align="left"
              eyebrow="Overview"
              title={`About ${service.title}`}
            />
            <ul className="mt-8 space-y-4">
              {service.details.map((detail) => (
                <li
                  key={detail}
                  className="flex gap-3 leading-relaxed text-gray-body"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal" />
                  {detail}
                </li>
              ))}
            </ul>

            <div className="content-card mt-12">
              <h3 className="text-xl font-semibold text-navy">
                Serving Oklahoma &amp; Texas
              </h3>
              <p className="mt-3 text-gray-body">
                In-person sessions available in the Stratford and Ada area.
                Secure telehealth available for clients throughout Oklahoma and
                Texas.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button href={siteConfig.bookingUrl}>Book a Session</Button>
                <Button href="/services" variant="secondary">
                  All Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
