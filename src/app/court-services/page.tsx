import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { courtServices, siteConfig, siteImages } from "@/lib/content";

export const metadata = pageMetadata({
  title: "Court Services & ADSAC/DUI Assessments",
  description:
    "ADSAC assessments and DUI evaluations in Ada and Stratford, OK. Court-ordered counseling referrals. Serving Oklahoma and Texas.",
  keywords: courtServices.keywords,
});

export default function CourtServicesPage() {
  return (
    <>
      <PageHero
        title={courtServices.title}
        description={courtServices.description}
        image={siteImages.office1}
      >
        <div className="mt-8">
          <Button href={siteConfig.bookingUrl}>Schedule Assessment</Button>
        </div>
      </PageHero>

      <section className="section-padding bg-cream">
        <div className="container-wide">
          <SectionHeading
            title="Court-Ordered Services"
            description="Professional, timely assessments and referrals serving Ada, Stratford, and surrounding Oklahoma communities."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {courtServices.services.map((item) => (
              <div
                key={item.title}
                className="content-card-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-gray-body">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="content-card mt-16 md:p-10">
            <h3 className="text-xl font-bold text-navy">
              ADSAC Ada OK &amp; Surrounding Areas
            </h3>
            <p className="mt-4 max-w-2xl leading-relaxed text-gray-body">
              If you have been court-ordered to complete an ADSAC assessment or
              DUI evaluation, contact us to schedule. Bring your court
              documentation and photo ID to your appointment. We provide
              professional, confidential assessments in compliance with Oklahoma
              requirements.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href={siteConfig.bookingUrl}>Request Appointment</Button>
              <Button href="tel:+14054569796" variant="secondary">
                Call 405-456-9796
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
