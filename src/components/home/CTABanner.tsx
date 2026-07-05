import Image from "next/image";
import Button from "@/components/ui/Button";
import { siteConfig, siteImages } from "@/lib/content";
import { IMAGE_QUALITY, IMAGE_SIZES } from "@/lib/images";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 md:py-32">
      <Image
        src={siteImages.office2}
        alt=""
        fill
        loading="lazy"
        fetchPriority="low"
        quality={IMAGE_QUALITY.section}
        className="object-cover object-center"
        sizes={IMAGE_SIZES.section}
      />
      <div className="absolute inset-0 bg-section-overlay" aria-hidden />

      <div className="container-wide relative px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="mt-5 text-base text-white sm:text-lg">
            Take the first step toward trauma-responsive, culturally attuned
            care. Request an appointment today — in-person or via secure
            telehealth.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <Button href={siteConfig.bookingUrl} className="w-full sm:w-auto">
              Book Appointment
            </Button>
            <Button
              href={siteConfig.phoneHref}
              variant="outline"
              className="w-full sm:w-auto"
            >
              Call {siteConfig.phone}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
