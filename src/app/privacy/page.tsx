import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/ui/PageHero";
import { siteConfig, siteImages } from "@/lib/content";

export const metadata = pageMetadata({
  title: "Privacy Policy | MRCS Oklahoma & Texas",
  description:
    "Privacy policy for Maafa Recovery Counseling Services, PLLC — a licensed professional counseling practice serving Stratford, Ada, OK and telehealth clients in Oklahoma & Texas.",
});

export default function PrivacyPage() {
  const lastUpdated = "July 2026";

  return (
    <>
      <PageHero
        title="Privacy Policy"
        description={`How ${siteConfig.shortName} protects your information when you use this website.`}
        image={siteImages.office5}
      />

      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto max-w-3xl">
          <p className="text-sm text-gray-muted">Last updated: {lastUpdated}</p>

          <div className="prose-custom mt-8 space-y-6 text-gray-body">
            <p>
              {siteConfig.name} (&quot;MRCS,&quot; &quot;we,&quot; &quot;us&quot;)
              is committed to protecting your privacy. This website is for
              informational purposes and to facilitate appointment requests.
              Protected health information (PHI) is handled in accordance with
              HIPAA and applicable state regulations.
            </p>
            <h2 className="text-xl font-bold text-navy">
              Information We Collect
            </h2>
            <p>
              We may collect information you voluntarily provide through contact
              forms, appointment requests, or email correspondence — including
              name, email, phone number, and scheduling preferences.
            </p>
            <h2 className="text-xl font-bold text-navy">
              How We Use Your Information
            </h2>
            <p>
              Information collected through this website is used to respond to
              inquiries, schedule appointments, and improve our services. We do
              not sell your personal information.
            </p>
            <h2 className="text-xl font-bold text-navy">Contact</h2>
            <p>
              For privacy-related questions, contact us at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-teal hover:underline"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
