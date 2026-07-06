import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteImages } from "@/lib/content";
import { IMAGE_QUALITY, IMAGE_SIZES } from "@/lib/images";

type PageHeroProps = {
  title: string;
  description?: string;
  image?: string;
  priority?: boolean;
  children?: React.ReactNode;
  className?: string;
};

export default function PageHero({
  title,
  description,
  image = siteImages.office4,
  priority = false,
  children,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pb-20 pt-28 max-md:pb-16 sm:pb-24 sm:pt-36 md:pb-28 md:pt-40 lg:pb-32 lg:pt-44",
        className
      )}
    >
      <div className="absolute inset-0 -z-10" aria-hidden>
        <Image
          src={image}
          alt=""
          fill
          priority={priority}
          loading={priority ? undefined : "lazy"}
          fetchPriority={priority ? "high" : "low"}
          quality={priority ? IMAGE_QUALITY.hero : IMAGE_QUALITY.section}
          className="object-cover object-center"
          sizes={IMAGE_SIZES.hero}
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      <div className="overlay-text container-wide px-5 sm:px-6 lg:px-8">
        <div className="animate-fade-up max-w-3xl">
          <h1 className="text-[2rem] font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-base leading-relaxed text-white sm:text-lg md:text-xl">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
