"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionPhotoBg from "@/components/ui/SectionPhotoBg";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { faqs, siteConfig, siteImages } from "@/lib/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionPhotoBg
      id="faq"
      image={siteImages.office2}
      alt="Counseling office seating area"
      objectPosition="left center"
    >
      <SectionHeading
        eyebrow="Common Questions"
        title="Frequently Asked Questions"
        description="Quick answers about scheduling, insurance, services, and what to expect when you reach out."
        light
      />

      <div className="mx-auto mt-10 max-w-3xl divide-y divide-slate-300 overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-lg shadow-navy/[0.08] sm:mt-14">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={faq.question}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex min-h-[56px] w-full items-start justify-between gap-4 px-5 py-5 text-left transition hover:bg-gray-soft/60 sm:px-6 md:px-8"
                aria-expanded={isOpen}
              >
                <span className="text-base font-semibold text-navy sm:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`mt-0.5 h-5 w-5 shrink-0 text-teal transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden
                />
              </button>
              {isOpen && (
                <div className="border-t border-slate-200 bg-gray-soft/40">
                  <p className="px-5 py-4 leading-relaxed text-gray-body sm:px-6 md:px-8">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="content-card-white mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-semibold text-navy">Ready to get started?</p>
          <p className="mt-1 text-sm text-gray-body">
            Book online or email{" "}
            <a
              href="mailto:cnash50@gmail.com"
              className="font-medium text-teal hover:underline"
            >
              cnash50@gmail.com
            </a>{" "}
            as a backup.
          </p>
        </div>
        <Button href={siteConfig.bookingUrl} className="shrink-0">
          Book Appointment
        </Button>
      </div>
    </SectionPhotoBg>
  );
}
