import { services } from "@/lib/content";
import ServicePageTemplate, {
  generateServiceMetadata,
} from "@/components/services/ServicePageTemplate";

const service = services.find((s) => s.slug === "individual-counseling")!;

export const metadata = generateServiceMetadata(service);

export default function IndividualCounselingPage() {
  return <ServicePageTemplate service={service} />;
}
