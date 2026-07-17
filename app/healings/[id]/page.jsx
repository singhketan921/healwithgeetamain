import Link from "next/link";
import { notFound } from "next/navigation";
import {
  PublicChecklist,
  PublicDetailLayout,
  PublicInfoCard,
  formatPublicDuration,
  formatPublicPrice,
} from "@/components/PublicPageUI";
import { fetchHealingModalityById } from "@/lib/services/healingService";

export const dynamic = "force-dynamic";

export default async function HealingDetailPage({ params }) {
  const resolvedParams = await params;
  const modality = await fetchHealingModalityById(resolvedParams.id);

  if (!modality) notFound();

  const price = formatPublicPrice(modality.investment ?? modality.price, modality.currency || "INR");
  const duration = formatPublicDuration(null, null, null, modality.durationMinutes);

  return (
    <PublicDetailLayout
      backHref="/healings"
      backLabel="← Back to healings"
      title={modality.title}
      description={modality.description}
      image={modality.image || "/assets/images/astrology.jpg"}
      badges={[price, duration, "Healing Session"]}
      aside={
        <div>
          <h2>Book this healing</h2>
          <p>Receive preparation guidance, a calm healing space and practical aftercare for the issue you want to support.</p>
          <PublicChecklist items={[price, duration, "Aftercare guidance"]} />
          <Link className="public-detail__side-cta" href="/healings#bookconsultation">Book Healing</Link>
        </div>
      }
    >
      <PublicInfoCard title="Healing overview">
        <p className="preserve-format">{modality.description}</p>
      </PublicInfoCard>
      {modality.benefits?.length ? (
        <PublicInfoCard title="Benefits">
          <PublicChecklist items={modality.benefits} />
        </PublicInfoCard>
      ) : null}
      <PublicInfoCard title="Session details">
        <PublicChecklist items={[price, duration, modality.currency || "INR"]} />
      </PublicInfoCard>
    </PublicDetailLayout>
  );
}
