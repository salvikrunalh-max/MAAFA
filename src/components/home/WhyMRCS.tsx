import * as Icons from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { whyMRCS } from "@/lib/content";

export default function WhyMRCS() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-navy" aria-hidden />
      <div className="absolute inset-0 -z-10 opacity-20" aria-hidden>
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_top_right,_var(--color-teal)_0%,_transparent_50%)]" />
      </div>

      <div className="container-wide">
        <SectionHeading
          eyebrow="Why Choose MRCS"
          title="Healing That Honors Who You Are"
          description="A practice built on evidence, cultural humility, and genuine human connection."
          light
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {whyMRCS.map((item) => {
            const Icon = Icons[item.icon] as React.ComponentType<{
              className?: string;
            }>;
            return (
              <div
                key={item.title}
                className="content-card-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 inline-flex rounded-xl bg-teal/10 p-3 text-teal">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-body">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
