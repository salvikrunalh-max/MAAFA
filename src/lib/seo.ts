import type { Metadata } from "next";
import { siteConfig } from "@/lib/content";

export const SEO_REGION = "Oklahoma & Texas";

export const defaultKeywords = [
  "trauma therapy Oklahoma",
  "counseling Texas",
  "EMDR Ada OK",
  "LPC Stratford OK",
  "Maafa Recovery Counseling",
  "IFS therapy",
  "couples counseling Oklahoma Texas",
] as const;

export function pageMetadata({
  title,
  description,
  keywords,
}: {
  title: string;
  description: string;
  keywords?: string[];
}): Metadata {
  return {
    title,
    description,
    keywords: keywords ?? [...defaultKeywords],
    openGraph: {
      title: `${title} | ${SEO_REGION}`,
      description,
      type: "website",
      locale: "en_US",
    },
  };
}

export const siteMetadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Trauma Therapy | ${SEO_REGION}`,
    template: `%s | ${SEO_REGION} | MRCS`,
  },
  description:
    "Identity-conscious, trauma-responsive psychotherapy in Oklahoma & Texas. EMDR, IFS, couples & family therapy. In-person Stratford/Ada + telehealth. Christopher W. Nash Jr., M.A., LPC.",
  keywords: [...defaultKeywords],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.tagline,
    type: "website",
    locale: "en_US",
  },
};
