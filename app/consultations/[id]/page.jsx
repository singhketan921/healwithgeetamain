import Link from "next/link";
import { notFound } from "next/navigation";
import {
  PublicChecklist,
  PublicDetailLayout,
  PublicInfoCard,
  formatPublicDuration,
  formatPublicPrice,
} from "@/components/PublicPageUI";
import { fetchConsultationById } from "@/lib/services/consultationService";

export const dynamic = "force-dynamic";

export default async function ConsultationDetailPage({ params }) {
  const resolvedParams = await params;
  const consultation = await fetchConsultationById(resolvedParams.id);

  if (!consultation) notFound();

  const price = consultation.price ? formatPublicPrice(consultation.price, consultation.currency || "INR") : "On request";
  const duration = formatPublicDuration(null, null, null, consultation.durationMinutes);
  const modalities = consultation.modalities?.length
    ? consultation.modalities
    : ["Session overview", "Preparation guidance", "Integration support"];

  return (
    <PublicDetailLayout
      backHref="/consultations"
      backLabel="← Back to consultations"
      title={consultation.title}
      description={`${consultation.description}\n\nEvery consultation is held as a focused, intentional session so the guidance stays practical and easy to integrate.`}
      image={consultation.image || "/assets/images/astrology.jpg"}
      badges={[price, duration, "One-on-one"]}
      aside={
        <div>
          <h2>Ready to begin?</h2>
          <p>Reserve your consultation and receive preparation guidance so your questions are clear before the session begins.</p>
          <PublicChecklist items={[price, duration, "Personal integration notes"]} />
          <Link className="public-detail__side-cta" href="/consultations#bookconsultation">Book Now</Link>
        </div>
      }
    >
      <PublicInfoCard title="What this session may include">
        <PublicChecklist items={modalities} />
      </PublicInfoCard>
      <PublicInfoCard title="Session details">
        <PublicChecklist items={[duration, price, "Preparation guidance shared after booking"]} />
      </PublicInfoCard>
    </PublicDetailLayout>
  );
}
