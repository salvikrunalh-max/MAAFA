import Image from "next/image";
import Button from "@/components/ui/Button";
import TrustBadges from "@/components/ui/TrustBadges";
import { siteConfig, siteImages } from "@/lib/content";
import { IMAGE_QUALITY, IMAGE_SIZES } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden sm:min-h-[92vh]">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <Image
          src={siteImages.office4}
          alt="Maafa Recovery Counseling office"
          fill
          priority
          fetchPriority="high"
          quality={IMAGE_QUALITY.hero}
          className="object-cover object-center"
          sizes={IMAGE_SIZES.hero}
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      <div className="overlay-text container-wide flex min-h-[88vh] flex-col justify-center px-5 pb-24 pt-36 sm:min-h-[92vh] sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
        <div className="animate-fade-up max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-teal sm:text-sm">
            {siteConfig.shortName} · Licensed LPC
          </p>
          <h1 className="text-[2rem] font-extrabold leading-[1.08] text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white sm:text-lg md:text-xl">
            {siteConfig.subtagline}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button href={siteConfig.bookingUrl} className="w-full sm:w-auto">
              Book Appointment
            </Button>
            <Button href="/about" variant="outline" className="w-full sm:w-auto">
              Learn More
            </Button>
          </div>
        </div>

        <div className="animate-fade-up animation-delay-200 mt-12 sm:mt-14">
          <TrustBadges />
        </div>
      </div>
    </section>
  );
}
