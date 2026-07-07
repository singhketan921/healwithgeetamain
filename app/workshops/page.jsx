import {
  CatalogToolbar,
  FeatureStrip,
  PublicCardGrid,
  PublicCatalogCard,
  PublicHero,
  PublicPageShell,
  SubscribeBand,
  WhyLearnBand,
} from "@/components/PublicPageUI";
import { PiCalendarCheck, PiMonitorPlay, PiSparkle, PiUsersThree } from "react-icons/pi";
import { fetchWorkshops } from "@/lib/services/workshopService";

export const dynamic = "force-dynamic";

function formatWorkshopSchedule(workshop) {
  if (!workshop.startDate) return "Dates TBA";
  return [workshop.startDate, workshop.startTime, workshop.timezone].filter(Boolean).join(" ");
}

function formatWorkshopPrice(workshop) {
  if (!workshop.price) return "On request";
  return `${workshop.currency || "INR"} ${workshop.price}`;
}

export const metadata = {
  title: "Workshops - HealWithGeeta",
  description: "Explore upcoming live workshops and sacred learning experiences with Geeta.",
};

export default async function WorkshopsPage() {
  const workshops = await fetchWorkshops();
  const activeWorkshops = (workshops || []).filter((item) => item?.active);

  return (
    <PublicPageShell>
      <PublicHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Workshops" }]}
        title="Live Workshops for Ritual Alignment & Inner Growth"
        description="Join time-bound sacred learning experiences designed for clarity, energy reset and practical spiritual growth."
        image="/assets/images/hero image faith healers.png"
      />
      <FeatureStrip
        items={[
          { title: "Live Sessions", text: "Learn in a focused real-time container", icon: PiMonitorPlay },
          { title: "Guided Rituals", text: "Practice with structure and support", icon: PiSparkle },
          { title: "Limited Seats", text: "Intimate groups for better attention", icon: PiUsersThree },
          { title: "Clear Schedule", text: "Dates and timing shared upfront", icon: PiCalendarCheck },
        ]}
      />
      <section className="public-section">
        <CatalogToolbar filters={["All Workshops", "Live", "Ritual", "Energy Reset", "Learning"]} sortLabel="Sort by Date" />
        {activeWorkshops.length ? (
          <PublicCardGrid>
            {activeWorkshops.map((workshop, index) => {
              const id = workshop.id ?? workshop._id ?? index;
              return (
                <PublicCatalogCard
                  key={id}
                  href={`/workshops/${id}`}
                  title={workshop.title || "Upcoming Workshop"}
                  description={workshop.teaser || workshop.subtitle || workshop.description || "A guided workshop for ritual alignment and energetic reset."}
                  image={workshop.heroImage || "/assets/images/hero image faith healers.png"}
                  price={formatWorkshopPrice(workshop)}
                  meta={[
                    { label: formatWorkshopSchedule(workshop) },
                    { label: workshop.location || "Online" },
                    { label: workshop.durationMinutes ? `${workshop.durationMinutes} mins` : "Immersive" },
                  ]}
                  cta="View Workshop"
                />
              );
            })}
          </PublicCardGrid>
        ) : (
          <div className="public-info-card">
            <h2>New workshops soon</h2>
            <p>The next live experience is being prepared. Please check back shortly.</p>
          </div>
        )}
      </section>
      <WhyLearnBand
        title="Why Join a Workshop?"
        items={[
          { title: "Focused Container", text: "Step into practice with clear intention" },
          { title: "Live Support", text: "Receive guidance while the work unfolds" },
          { title: "Ritual Practice", text: "Learn tools you can repeat at home" },
          { title: "Shared Energy", text: "Grow with a like-minded group" },
        ]}
      />
      <SubscribeBand title="Hear about upcoming workshops" text="Get notified when new live sessions open." />
    </PublicPageShell>
  );
}
