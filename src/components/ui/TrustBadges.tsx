import { trustBadges } from "@/lib/content";

const badgeGlass =
  "rounded-full border shadow-sm shadow-navy/8 backdrop-blur-md backdrop-saturate-150";

export default function TrustBadges() {
  const [featured, ...rest] = trustBadges;

  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/55 sm:text-xs">
        Trusted Networks &amp; Insurance
      </p>
      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
        <span
          className={`${badgeGlass} border-teal/40 bg-cream/90 px-4 py-2 text-sm font-semibold text-navy`}
        >
          {featured}
        </span>
        {rest.map((badge) => (
          <span
            key={badge}
            className={`${badgeGlass} border-white/80 bg-white/80 px-3.5 py-2 text-sm font-medium text-gray-body`}
          >
            {badge}
          </span>
        ))}
        <span
          className={`${badgeGlass} border-white/70 bg-cream/85 px-3.5 py-2 text-xs font-medium text-navy sm:text-sm`}
        >
          Licensed LPC · OK &amp; TX
        </span>
      </div>
    </div>
  );
}
