import { trustBadges } from "@/lib/content";

export default function TrustBadges() {
  const [featured, ...rest] = trustBadges;

  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/55 sm:text-xs">
        Trusted Networks &amp; Insurance
      </p>
      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
        <span className="rounded-full border border-teal/40 bg-teal/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
          {featured}
        </span>
        {rest.map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-white/30 bg-white/15 px-3.5 py-2 text-sm font-medium text-white backdrop-blur-sm"
          >
            {badge}
          </span>
        ))}
        <span className="rounded-full border border-white/20 bg-navy/40 px-3.5 py-2 text-xs font-medium text-white/80 backdrop-blur-sm sm:text-sm">
          Licensed LPC · OK &amp; TX
        </span>
      </div>
    </div>
  );
}
