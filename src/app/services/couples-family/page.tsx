import { services } from "@/lib/content";
import ServicePageTemplate, {
  generateServiceMetadata,
} from "@/components/services/ServicePageTemplate";

const service = services.find((s) => s.slug === "couples-family")!;

export const metadata = generateServiceMetadata(service);

export default function CouplesFamilyPage() {
  return <ServicePageTemplate service={service} />;
}
