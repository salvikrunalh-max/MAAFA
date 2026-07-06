import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import Button from "@/components/ui/Button";
import { services, siteConfig, siteImages } from "@/lib/content";
import { IMAGE_QUALITY, IMAGE_SIZES } from "@/lib/images";

export const metadata = pageMetadata({
  title: "EMDR, IFS & Trauma Counseling | Ada OK & Texas",
  description:
    "Counseling services in Oklahoma & Texas — EMDR trauma therapy, IFS, couples & family therapy, individual counseling, and group skills. In-person Stratford/Ada + telehealth. Book now.",
  keywords: [
    "EMDR therapy Oklahoma",
    "IFS counseling Texas",
    "couples therapy Ada OK",
    "family counselor Stratford OK",
    "group therapy Oklahoma Texas",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="Evidence-based, trauma-responsive care tailored to your identity, relationships, and healing goals."
        image={siteImages.office1}
      />

      <section className="section-padding bg-cream">
        <div className="container-wide">
          <SectionHeading
            align="left"
            title="Comprehensive Mental Health Services"
            description="Each service is grounded in research and delivered with cultural humility, safety, and compassion."
          />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-24">
        <Image
          src={siteImages.office5}
          alt=""
          fill
          loading="lazy"
          fetchPriority="low"
          quality={IMAGE_QUALITY.section}
          className="object-cover object-center"
          sizes={IMAGE_SIZES.section}
        />
        <div className="absolute inset-0 bg-section-overlay" aria-hidden />
        <div className="overlay-text container-wide relative px-5 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Not Sure Where to Start?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white sm:text-lg">
            Request a consultation and we&apos;ll help you find the right fit
            for your needs.
          </p>
          <div className="mt-8">
            <Button href={siteConfig.bookingUrl}>Request Appointment</Button>
          </div>
        </div>
      </section>
    </>
  );
}
