import type { Metadata } from "next";
import { siteConfig } from "@/lib/content";

export const SEO_REGION = "Oklahoma & Texas";

export const defaultKeywords = [
  "trauma therapy Oklahoma",
  "counseling Texas",
  "EMDR Ada OK",
  "LPC Stratford OK",
  "Maafa Recovery Counseling",
  "IFS therapy Oklahoma Texas",
  "couples counseling Ada OK",
  "telehealth therapist Texas",
  "book therapist Oklahoma",
  "counselor near Stratford OK",
  "PTSD therapy Oklahoma Texas",
  "family therapy Ada Oklahoma",
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
  const mergedKeywords = keywords
    ? [...new Set([...keywords, ...defaultKeywords])]
    : [...defaultKeywords];

  return {
    title,
    description,
    keywords: mergedKeywords,
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
    default: `Trauma Therapist Stratford OK & Texas | ${siteConfig.shortName}`,
    template: `%s | ${SEO_REGION} | MRCS`,
  },
  description:
    "Licensed trauma therapist in Stratford & Ada, OK — telehealth across Oklahoma & Texas. EMDR, IFS, couples & family counseling. Book with Christopher W. Nash Jr., M.A., LPC.",
  keywords: [...defaultKeywords],
  openGraph: {
    title: `${siteConfig.shortName} | Trauma Therapy | ${SEO_REGION}`,
    description:
      "Identity-conscious, trauma-responsive psychotherapy in Oklahoma & Texas. EMDR, IFS, couples & family therapy. In-person Stratford/Ada + telehealth.",
    type: "website",
    locale: "en_US",
  },
};
