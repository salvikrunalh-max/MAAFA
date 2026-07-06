import { pageMetadata } from "@/lib/seo";
import * as Icons from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { forProfessionals, siteImages } from "@/lib/content";

export const metadata = pageMetadata({
  title: "LPC Supervision & CEUs | Oklahoma & Texas",
  description:
    "LPC clinical supervision, continuing education (CEUs), and 1099 contractor opportunities with Maafa Recovery Counseling in Oklahoma & Texas. Trauma-responsive, culturally attuned training.",
  keywords: [
    "LPC supervision Oklahoma",
    "clinical supervision Texas",
    "CEU workshops Oklahoma",
    "counselor contractor Texas",
    "LPC candidate supervision Ada OK",
  ],
});

export default function ForProfessionalsPage() {
  return (
    <>
      <PageHero
        title={forProfessionals.title}
        description={forProfessionals.description}
        image={siteImages.office5}
      />

      <section className="section-padding bg-cream">
        <div className="container-wide">
          <SectionHeading
            title="Professional Opportunities"
            description="Partner with a practice committed to evidence-based, culturally attuned clinical excellence."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {forProfessionals.offerings.map((item) => {
              const Icon = Icons[item.icon] as React.ComponentType<{
                className?: string;
              }>;
              return (
                <div
                  key={item.title}
                  className="content-card-white transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 inline-flex rounded-xl bg-navy/5 p-3 text-navy">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-gray-body">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 rounded-2xl bg-navy p-8 text-center md:p-12">
            <h3 className="text-2xl font-bold text-white">
              Interested in Joining or Collaborating?
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Contact us to discuss LPC supervision, CEU opportunities, or
              independent contractor arrangements.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="mailto:cnash50@gmail.com">Email Christopher</Button>
              <Button href="/contact" variant="outline">
                Contact Form
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
