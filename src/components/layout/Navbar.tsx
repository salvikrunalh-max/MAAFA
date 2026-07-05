"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { siteConfig } from "@/lib/content";
import { cn } from "@/lib/utils";

const MobileNavControls = dynamic(() => import("./MobileNavControls"), {
  ssr: false,
  loading: () => (
    <div
      className="h-12 w-12 shrink-0 xl:hidden"
      aria-hidden
    />
  ),
});

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "glass-nav py-3 shadow-lg"
          : "bg-navy/90 py-3.5 backdrop-blur-md sm:py-4 xl:bg-transparent xl:backdrop-blur-none xl:py-5"
      )}
    >
      <div className="container-wide relative flex items-center justify-between gap-3 px-5 sm:gap-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group min-w-0 max-w-[calc(100%-3.5rem)] pr-2 xl:max-w-sm xl:pr-4"
        >
          <span className="block leading-[1.1]">
            <span className="block text-[1.15rem] font-extrabold tracking-tight text-white sm:text-xl md:text-2xl lg:text-[1.8rem]">
              <span className="text-teal">Maafa</span> Recovery
            </span>
            <span className="block text-[1.15rem] font-extrabold tracking-tight text-white sm:text-xl md:text-2xl lg:text-[1.8rem]">
              Counseling Services
            </span>
          </span>
          <span className="mt-1 block text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-white/65 sm:text-[0.65rem]">
            {siteConfig.shortName} · Oklahoma &amp; Texas
          </span>
        </Link>

        <nav
          className="hidden items-center gap-4 2xl:gap-5 xl:flex"
          aria-label="Main"
        >
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="group relative">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-semibold text-white transition hover:text-teal"
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                  <div className="min-w-[260px] rounded-xl border border-white/10 bg-navy py-2 shadow-2xl">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-3 text-sm text-white/90 transition hover:bg-white/5 hover:text-teal"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-white transition hover:text-teal"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href={siteConfig.bookingUrl}
            className="rounded-full bg-teal px-5 py-2.5 text-sm font-bold text-navy shadow-md transition hover:bg-teal-light"
          >
            Book Appointment
          </Link>
        </nav>

        <div className="relative shrink-0 xl:hidden">
          <MobileNavControls />
        </div>
      </div>
    </header>
  );
}
