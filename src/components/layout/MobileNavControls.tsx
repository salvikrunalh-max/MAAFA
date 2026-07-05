"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { siteConfig } from "@/lib/content";
import { cn } from "@/lib/utils";

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-5 w-6" aria-hidden>
      <span
        className={cn(
          "absolute left-0 block h-0.5 w-6 rounded-full bg-white transition-all duration-200",
          open ? "top-[9px] rotate-45" : "top-0.5"
        )}
      />
      <span
        className={cn(
          "absolute left-0 top-[9px] block h-0.5 w-6 rounded-full bg-white transition-all duration-200",
          open ? "opacity-0" : "opacity-100"
        )}
      />
      <span
        className={cn(
          "absolute left-0 block h-0.5 w-6 rounded-full bg-white transition-all duration-200",
          open ? "top-[9px] -rotate-45" : "top-[17px]"
        )}
      />
    </span>
  );
}

export default function MobileNavControls() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const close = useCallback(() => {
    setOpen(false);
    setServicesOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setOpen((prev) => !prev);
    setServicesOpen(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.documentElement.toggleAttribute("data-mobile-menu", open);
    return () => {
      document.body.style.overflow = "";
      document.documentElement.removeAttribute("data-mobile-menu");
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        className="relative z-50 flex h-12 w-12 shrink-0 touch-manipulation items-center justify-center rounded-lg text-white active:bg-white/10 xl:hidden"
        onClick={toggle}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
      >
        <HamburgerIcon open={open} />
      </button>

      {open &&
        createPortal(
          <div
            id="mobile-nav-panel"
            className="fixed inset-0 z-[9999] flex flex-col bg-navy xl:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div
              className="flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-3"
              style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}
            >
              <p className="text-sm font-bold text-white">Menu</p>
              <button
                type="button"
                className="flex h-12 w-12 touch-manipulation items-center justify-center rounded-lg text-white active:bg-white/10"
                onClick={close}
                aria-label="Close menu"
              >
                <HamburgerIcon open />
              </button>
            </div>

            <nav
              className="flex-1 overflow-y-auto overscroll-contain px-4 py-4"
              aria-label="Mobile"
              style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
            >
              <div className="space-y-0.5">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.children ? (
                      <>
                        <button
                          type="button"
                          className="flex min-h-[52px] w-full touch-manipulation items-center justify-between rounded-lg px-3 py-3 text-left text-base font-semibold text-white active:bg-white/10"
                          onClick={() => setServicesOpen(!servicesOpen)}
                          aria-expanded={servicesOpen}
                        >
                          {link.label}
                          <ChevronDown
                            className={cn(
                              "h-5 w-5 shrink-0 transition",
                              servicesOpen && "rotate-180"
                            )}
                          />
                        </button>
                        {servicesOpen && (
                          <div className="mb-2 ml-3 border-l border-white/15 pl-3">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="flex min-h-[48px] items-center py-2 text-[0.95rem] text-white/90 active:text-teal"
                                onClick={close}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className="flex min-h-[52px] items-center rounded-lg px-3 py-3 text-base font-semibold text-white active:bg-white/10"
                        onClick={close}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <Link
                href={siteConfig.bookingUrl}
                className="mt-6 flex min-h-[52px] touch-manipulation items-center justify-center rounded-full bg-teal text-base font-bold text-navy shadow-lg active:bg-teal-light"
                onClick={close}
              >
                Book Appointment
              </Link>
            </nav>
          </div>,
          document.body
        )}
    </>
  );
}
