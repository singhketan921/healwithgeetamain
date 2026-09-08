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

const consultationImageById = {
  "tarot-card-reading": "/assets/generated/old-site-inspired/consultation-tarot.webp",
  tarot: "/assets/generated/old-site-inspired/consultation-tarot.webp",
  astrology: "/assets/generated/old-site-inspired/consultation-astrology.webp",
  "astrology-consultation": "/assets/generated/old-site-inspired/consultation-astrology.webp",
  numerology: "/assets/generated/old-site-inspired/consultation-numerology.webp",
  "mobile-numerology": "/assets/generated/old-site-inspired/consultation-mobile-numerology.webp",
  "kundali-vastu": "/assets/generated/old-site-inspired/consultation-kundli-vastu.webp",
  "kundli-vastu": "/assets/generated/old-site-inspired/consultation-kundli-vastu.webp",
  "kundli-vastu-consultation": "/assets/generated/old-site-inspired/consultation-kundli-vastu.webp",
  "face-reading": "/assets/generated/old-site-inspired/consultation-face-reading.webp",
};

function getConsultationImage(consultation) {
  const id = String(consultation?.id ?? consultation?._id ?? "").toLowerCase();
  const title = String(consultation?.title ?? "").toLowerCase();

  if (consultation?.image) return consultation.image;
  if (consultationImageById[id]) return consultationImageById[id];
  if (title.includes("mobile")) return consultationImageById["mobile-numerology"];
  if (title.includes("tarot")) return consultationImageById["tarot-card-reading"];
  if (title.includes("astrology")) return consultationImageById.astrology;
  if (title.includes("numerology")) return consultationImageById.numerology;
  if (title.includes("kundli") || title.includes("kundali") || title.includes("vastu")) return consultationImageById["kundali-vastu"];
  if (title.includes("face")) return consultationImageById["face-reading"];

  return consultationImageById["tarot-card-reading"];
}

export default async function ConsultationDetailPage({ params }) {
  const resolvedParams = await params;
  const consultation = await fetchConsultationById(resolvedParams.id);

  if (!consultation) notFound();

  const price = consultation.price ? formatPublicPrice(consultation.price, consultation.currency || "INR") : "On request";
  const duration = formatPublicDuration(null, null, null, consultation.durationMinutes);
  const modalities = consultation.modalities?.length
    ? consultation.modalities
    : ["Session overview", "Preparation guidance", "Integration support"];
  const image = getConsultationImage(consultation);

  return (
    <PublicDetailLayout
      backHref="/consultations"
      backLabel="← Back to consultations"
      title={consultation.title}
      description={`${consultation.description}\n\nEvery consultation is held as a focused, intentional session so the guidance stays practical and easy to integrate.`}
      image={image}
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
