"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/content";

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <section className="section-padding bg-gray-soft">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Client Voices"
          title="What Clients Say"
          description="Real stories from people on their healing journey. Replace these placeholders with verified reviews when ready."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <blockquote
            key={current}
            className="content-card-white md:p-12"
          >
            <div className="mb-4 flex gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-earth text-earth"
                  aria-hidden
                />
              ))}
            </div>
            <p className="text-lg leading-relaxed text-navy md:text-xl">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <footer className="mt-6 text-sm font-medium text-gray-body">
              — {testimonial.author}
            </footer>
          </blockquote>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-slate-300 p-2 text-navy transition hover:border-teal hover:text-teal"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-8 bg-teal" : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-slate-300 p-2 text-navy transition hover:border-teal hover:text-teal"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
