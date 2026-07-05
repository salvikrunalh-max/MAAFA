import Image from "next/image";
import { cn } from "@/lib/utils";
import { IMAGE_QUALITY, IMAGE_SIZES } from "@/lib/images";

type SectionPhotoBgProps = {
  image: string;
  alt?: string;
  objectPosition?: string;
  id?: string;
  className?: string;
  children: React.ReactNode;
};

/** Subtle full-bleed office photo behind a section — lazy-loaded for performance. */
export default function SectionPhotoBg({
  image,
  alt = "",
  objectPosition = "center",
  id,
  className,
  children,
}: SectionPhotoBgProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden section-padding scroll-mt-28",
        className
      )}
    >
      <Image
        src={image}
        alt={alt}
        fill
        loading="lazy"
        fetchPriority="low"
        quality={IMAGE_QUALITY.section}
        className="object-cover"
        style={{ objectPosition }}
        sizes={IMAGE_SIZES.section}
      />
      <div className="absolute inset-0 bg-content-overlay" aria-hidden />
      <div className="container-wide relative">{children}</div>
    </section>
  );
}
