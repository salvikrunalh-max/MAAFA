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
  title: "Trauma Therapist Stratford OK & Texas Telehealth",
  description:
    "Find a licensed trauma therapist in Stratford, Ada, OK or via telehealth across Oklahoma & Texas. EMDR, IFS, couples & family counseling with Christopher W. Nash Jr., M.A., LPC. Book today.",
  keywords: [
    "trauma therapist Oklahoma",
    "counselor Stratford OK",
    "EMDR therapy Ada OK",
    "telehealth counseling Texas",
    "LPC near me Oklahoma",
  ],
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
