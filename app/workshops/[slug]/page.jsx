import Link from "next/link";
import { notFound } from "next/navigation";
import {
  PublicChecklist,
  PublicDetailLayout,
  PublicInfoCard,
} from "@/components/PublicPageUI";
import { fetchWorkshopById } from "@/lib/services/workshopService";

export const dynamic = "force-dynamic";

function formatWorkshopPrice(workshop) {
  if (!workshop.price) return "Price on request";
  return `${workshop.currency || "INR"} ${workshop.price}`;
}

function formatSchedule(workshop) {
  if (!workshop.startDate) return "Dates to be announced";
  return [workshop.startDate, workshop.startTime, workshop.timezone].filter(Boolean).join(" ");
}

export default async function WorkshopLandingPage({ params }) {
  const resolvedParams = await params;
  const workshop = await fetchWorkshopById(resolvedParams.slug);

  if (!workshop || !workshop.active) notFound();

  const price = formatWorkshopPrice(workshop);
  const schedule = formatSchedule(workshop);
  const duration = workshop.durationMinutes ? `${workshop.durationMinutes} mins` : "Immersive";
  const ctaLabel = workshop.ctaLabel?.trim() || "Reserve Your Seat";
  const ctaLink = workshop.ctaLink || "/contact";

  return (
    <PublicDetailLayout
      backHref="/workshops"
      backLabel="← Back to workshops"
      title={workshop.title}
      description={workshop.teaser || workshop.subtitle || workshop.description}
      image={workshop.heroImage || "/assets/images/hero image faith healers.png"}
      badges={[workshop.offerBadge || "Live Workshop", schedule, price]}
      aside={
        <div>
          <h2>{ctaLabel}</h2>
          <p>{workshop.offerDescription || "Step into a focused live learning container."}</p>
          <PublicChecklist items={[price, schedule, workshop.location || "Online", duration]} />
          <Link className="public-detail__side-cta" href={ctaLink}>{ctaLabel}</Link>
        </div>
      }
    >
      <PublicInfoCard title="Workshop overview">
        <p className="preserve-format">{workshop.description || workshop.teaser || "A guided workshop for ritual alignment and energetic reset."}</p>
      </PublicInfoCard>
      <PublicInfoCard title="What you receive">
        <PublicChecklist
          items={[
            "Live energy alignment and teaching",
            "Guided ritual flow",
            "Post-session integration",
            workshop.location || "Online learning space",
          ]}
        />
      </PublicInfoCard>
      <PublicInfoCard title="Workshop details">
        <PublicChecklist items={[schedule, duration, price, workshop.seats ? `${workshop.seats} seats` : "Limited seats"]} />
      </PublicInfoCard>
    </PublicDetailLayout>
  );
}
