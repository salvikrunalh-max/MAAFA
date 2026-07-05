import { pageMetadata } from "@/lib/seo";
import { Mic } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { siteImages } from "@/lib/content";

export const metadata = pageMetadata({
  title: "The Front Porch Podcast",
  description:
    "The Front Porch Podcast — conversations on mental health, healing, culture, and community with Christopher W. Nash Jr. Based in Oklahoma and Texas.",
});

export default function PodcastPage() {
  return (
    <>
      <PageHero
        title="The Front Porch Podcast"
        description="Conversations on mental health, healing, culture, and community — from the porch to the practice."
        image={siteImages.office2}
      />

      <section className="section-padding bg-cream">
        <div className="container-wide">
          <SectionHeading
            title="Latest Episodes"
            description="Embed your podcast player below. Replace the placeholder with your Spotify, Apple Podcasts, or Anchor embed code."
          />

          <div className="mx-auto mt-14 max-w-3xl">
            <div className="content-card-white flex min-h-[320px] flex-col items-center justify-center p-12 text-center">
              <Mic className="h-12 w-12 text-teal" aria-hidden />
              <p className="mt-4 text-lg font-semibold text-navy">
                Podcast Player Placeholder
              </p>
              <p className="mt-3 max-w-md text-gray-body">
                Paste your Spotify, Apple Podcasts, or Anchor embed iframe in{" "}
                <code className="rounded bg-white px-2 py-0.5 text-sm text-teal">
                  src/app/podcast/page.tsx
                </code>
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-body">
              Have a topic suggestion or want to be a guest?
            </p>
            <div className="mt-6">
              <Button href="mailto:cnash50@gmail.com">Get in Touch</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
