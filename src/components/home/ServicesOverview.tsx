import Link from "next/link";
import SectionPhotoBg from "@/components/ui/SectionPhotoBg";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import Button from "@/components/ui/Button";
import { services, siteConfig, siteImages } from "@/lib/content";

export default function ServicesOverview() {
  return (
    <SectionPhotoBg
      image={siteImages.office5}
      alt="Maafa Recovery Counseling office"
      objectPosition="center"
    >
      <SectionHeading
        eyebrow="What We Offer"
        title="Evidence-Based, Trauma-Responsive Care"
        description="Personalized therapy for individuals, couples, families, and groups — grounded in research and attuned to your identity and culture."
        light
      />

      <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {services.map((s, i) => (
          <ServiceCard key={s.slug} {...s} index={i} />
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-4 overlay-text">
        <Button href={siteConfig.bookingUrl}>Book Appointment</Button>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
        >
          View All Services
        </Link>
      </div>
    </SectionPhotoBg>
  );
}
