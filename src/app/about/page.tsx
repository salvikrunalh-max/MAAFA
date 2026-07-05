import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import { clinician, siteConfig, siteImages } from "@/lib/content";
import { IMAGE_QUALITY, IMAGE_SIZES } from "@/lib/images";

export const metadata = pageMetadata({
  title: "About Christopher W. Nash Jr., M.A., LPC",
  description:
    "Licensed professional counselor in Oklahoma and Texas. Chickasaw Nation experience, EMDR, IFS, ABFT-II, ACT, DBT. Trauma-responsive, culturally attuned care.",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Christopher W. Nash Jr."
        description={clinician.summary}
        image={siteImages.office4}
      />

      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-xl">
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
                </div>
                <div className="content-card-white mt-6 space-y-2 text-sm text-gray-body">
                  <p>
                    <strong className="text-navy">Email:</strong>{" "}
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-teal hover:underline"
                    >
                      {siteConfig.email}
                    </a>
                  </p>
                  <p>
                    <strong className="text-navy">Phone:</strong>{" "}
                    <a
                      href={siteConfig.phoneHref}
                      className="text-teal hover:underline"
                    >
                      {siteConfig.phone}
                    </a>
                  </p>
                  <p>
                    <strong className="text-navy">Location:</strong>{" "}
                    {siteConfig.address}
                  </p>
                </div>
                <div className="mt-6">
                  <Button href={siteConfig.bookingUrl}>Request Appointment</Button>
                </div>
              </div>
            </div>

            <div className="space-y-8 lg:col-span-2">
              <section className="content-card-white">
                <h2 className="text-2xl font-bold text-navy">Licenses</h2>
                <ul className="mt-4 space-y-2 text-gray-body">
                  {clinician.licenses.map((l) => (
                    <li key={l} className="flex gap-2">
                      <span className="text-teal">●</span> {l}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="content-card-white">
                <h2 className="text-2xl font-bold text-navy">Education</h2>
                <div className="mt-4 space-y-4">
                  {clinician.education.map((e) => (
                    <div
                      key={e.degree}
                      className="rounded-xl border border-gray-200 p-5"
                    >
                      <p className="font-semibold text-navy">{e.degree}</p>
                      <p className="text-sm text-earth">{e.date}</p>
                      <p className="mt-1 text-gray-body">{e.school}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="content-card-white">
                <h2 className="text-2xl font-bold text-navy">
                  Professional Experience
                </h2>
                <div className="mt-4 space-y-6">
                  {clinician.experience.map((exp) => (
                    <div
                      key={exp.title + exp.org}
                      className="rounded-xl border border-gray-200 p-6"
                    >
                      <h3 className="text-lg font-semibold text-navy">
                        {exp.title}
                      </h3>
                      <p className="text-sm font-medium text-teal">
                        {exp.org}
                      </p>
                      <p className="text-sm text-earth">{exp.period}</p>
                      <ul className="mt-3 space-y-1.5">
                        {exp.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex gap-2 text-sm text-gray-body"
                          >
                            <span className="text-teal">—</span> {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section className="content-card-white">
                <h2 className="text-2xl font-bold text-navy">
                  Modalities &amp; Approaches
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {clinician.modalities.map((m) => (
                    <span
                      key={m}
                      className="rounded-full bg-gray-soft px-3 py-1.5 text-sm text-navy ring-1 ring-navy/10"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </section>

              <section className="content-card-white">
                <h2 className="text-2xl font-bold text-navy">
                  Professional Development
                </h2>
                <ul className="mt-4 space-y-2 text-gray-body">
                  {clinician.professionalDevelopment.map((d) => (
                    <li key={d} className="flex gap-2">
                      <span className="text-teal">●</span> {d}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="content-card-white">
                <h2 className="text-2xl font-bold text-navy">
                  Affiliations &amp; Cultural Commitment
                </h2>
                <ul className="mt-4 space-y-2 text-gray-body">
                  {clinician.affiliations.map((a) => (
                    <li key={a} className="flex gap-2">
                      <span className="text-teal">●</span> {a}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="content-card-white">
                <h2 className="text-2xl font-bold text-navy">
                  Volunteer Experience
                </h2>
                <ul className="mt-4 space-y-2 text-gray-body">
                  {clinician.volunteer.map((v) => (
                    <li key={v} className="flex gap-2">
                      <span className="text-teal">●</span> {v}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
