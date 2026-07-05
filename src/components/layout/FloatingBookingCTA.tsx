import Link from "next/link";
import { Calendar } from "lucide-react";
import { siteConfig } from "@/lib/content";

export default function FloatingBookingCTA() {
  return (
    <div className="floating-booking-cta pointer-events-none fixed inset-x-0 bottom-0 z-[100] flex justify-end p-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] md:p-6">
      <Link
        href={siteConfig.bookingUrl}
        className="animate-fade-in pointer-events-auto flex min-h-[48px] items-center gap-2 rounded-full bg-teal px-5 py-3.5 text-sm font-bold text-navy shadow-[0_8px_30px_rgba(0,191,165,0.45)] ring-2 ring-white transition hover:scale-[1.02] hover:bg-teal-light md:px-7 md:py-4 md:text-base"
        aria-label="Book now"
      >
        <Calendar className="h-5 w-5 shrink-0" aria-hidden />
        <span>Book Now</span>
      </Link>
    </div>
  );
}
