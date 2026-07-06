import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        light && "overlay-text",
        className
      )}
    >
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal sm:text-sm">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-[2.75rem] lg:text-5xl",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:mt-6 sm:text-lg md:text-xl",
            light ? "text-white/90" : "text-gray-body"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
