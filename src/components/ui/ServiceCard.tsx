import Link from "next/link";
import * as Icons from "lucide-react";

type ServiceCardProps = {
  slug: string;
  title: string;
  description: string;
  icon: keyof typeof Icons;
  index?: number;
};

export default function ServiceCard({
  slug,
  title,
  description,
  icon,
}: ServiceCardProps) {
  const Icon = Icons[icon] as React.ComponentType<{ className?: string }>;

  return (
    <Link
      href={`/services/${slug}`}
      className="content-card-white group block transition hover:-translate-y-1 hover:shadow-xl max-md:!rounded-xl max-md:!p-3.5 max-md:shadow-md"
    >
      <div className="mb-2 inline-flex rounded-lg bg-teal/10 p-2 text-teal transition group-hover:bg-teal/20 md:mb-4 md:rounded-xl md:p-3">
        <Icon className="h-5 w-5 md:h-6 md:w-6" aria-hidden />
      </div>
      <h3 className="text-[0.8125rem] font-bold leading-snug text-navy sm:text-xl md:text-2xl">
        {title}
      </h3>
      <p className="mt-1.5 line-clamp-3 text-xs leading-snug text-gray-body sm:mt-3 sm:line-clamp-none sm:text-base sm:leading-relaxed">
        {description}
      </p>
      <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-teal sm:mt-4 sm:text-sm">
        <span className="sm:hidden">More →</span>
        <span className="hidden sm:inline">Learn more →</span>
      </span>
    </Link>
  );
}
