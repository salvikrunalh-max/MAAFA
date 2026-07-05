import { services } from "@/lib/content";
import ServicePageTemplate, {
  generateServiceMetadata,
} from "@/components/services/ServicePageTemplate";

const service = services.find((s) => s.slug === "group-therapy")!;

export const metadata = generateServiceMetadata(service);

export default function GroupTherapyPage() {
  return <ServicePageTemplate service={service} />;
}
