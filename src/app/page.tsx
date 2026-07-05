import dynamic from "next/dynamic";
import { pageMetadata } from "@/lib/seo";
import Hero from "@/components/home/Hero";
import AboutChristopher from "@/components/home/AboutChristopher";
import ServicesOverview from "@/components/home/ServicesOverview";

const FAQ = dynamic(() => import("@/components/home/FAQ"));
const WhyMRCS = dynamic(() => import("@/components/home/WhyMRCS"));
const TestimonialsCarousel = dynamic(
  () => import("@/components/home/TestimonialsCarousel")
);
const CTABanner = dynamic(() => import("@/components/home/CTABanner"));

export const metadata = pageMetadata({
  title: "Trauma Therapy & Counseling",
  description:
    "Maafa Recovery Counseling Services — identity-conscious, trauma-responsive psychotherapy. EMDR, IFS, couples & family therapy. In-person Stratford/Ada + telehealth across Oklahoma and Texas.",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutChristopher />
      <ServicesOverview />
      <FAQ />
      <WhyMRCS />
      <TestimonialsCarousel />
      <CTABanner />
    </>
  );
}
