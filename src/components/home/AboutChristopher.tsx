import Image from "next/image";
import Link from "next/link";
import { clinician, siteImages } from "@/lib/content";
import { IMAGE_QUALITY, IMAGE_SIZES } from "@/lib/images";

export default function AboutChristopher() {
  return (
    <section className="section-padding bg-gray-soft">
      <div className="container-wide grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl shadow-2xl lg:max-w-none">
          <Image
            src={siteImages.headshot}
            alt={clinician.name}
            fill
            loading="lazy"
            fetchPriority="low"
            quality={IMAGE_QUALITY.portrait}
            className="object-cover object-top"
            sizes={IMAGE_SIZES.portrait}
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-navy/10" />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal sm:text-sm">
            About Your Therapist
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
            {clinician.shortName}
          </h2>
          <p className="mt-2 font-semibold text-earth">
            M.A., LPC — Oklahoma &amp; Texas
          </p>
          <p className="mt-6 leading-relaxed text-gray-body">{clinician.bio}</p>

          <div className="mt-8">
            <h3 className="font-bold text-navy">Core Modalities</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {clinician.modalities.slice(0, 6).map((m) => (
                <span
                  key={m}
                  className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-navy shadow-sm ring-1 ring-navy/15"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          <Link
            href="/about"
            className="mt-8 inline-flex min-h-[44px] items-center gap-1 text-sm font-semibold text-teal transition hover:text-teal-dark"
          >
            Read full credentials &amp; experience →
          </Link>
        </div>
      </div>
    </section>
  );
}
