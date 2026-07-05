import { services } from "@/lib/content";
import ServicePageTemplate, {
  generateServiceMetadata,
} from "@/components/services/ServicePageTemplate";

const service = services.find((s) => s.slug === "emdr-trauma")!;

export const metadata = generateServiceMetadata(service);

export default function EMDRTraumaPage() {
  return <ServicePageTemplate service={service} />;
}
