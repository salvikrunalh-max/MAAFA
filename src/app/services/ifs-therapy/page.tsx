import { services } from "@/lib/content";
import ServicePageTemplate, {
  generateServiceMetadata,
} from "@/components/services/ServicePageTemplate";

const service = services.find((s) => s.slug === "ifs-therapy")!;

export const metadata = generateServiceMetadata(service);

export default function IFSTherapyPage() {
  return <ServicePageTemplate service={service} />;
}
