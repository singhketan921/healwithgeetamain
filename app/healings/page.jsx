import {
  CatalogToolbar,
  FeatureStrip,
  PublicCardGrid,
  PublicCatalogCard,
  PublicHero,
  PublicPageShell,
  SubscribeBand,
  WhyLearnBand,
  derivePublicPrice,
  formatPublicDuration,
} from "@/components/PublicPageUI";
import { PiFlowerLotus, PiHandsPraying, PiHeart, PiSparkle } from "react-icons/pi";
import { fetchHealingModalities } from "@/lib/services/healingService";

export default async function HealingsPage() {
  const modalities = await fetchHealingModalities();

  return (
    <PublicPageShell>
      <PublicHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Healings" }]}
        title="Healing Sessions for Balance, Release & Renewal"
        description="Gentle energetic offerings designed to calm the nervous system, clear blocks and restore inner harmony."
        image="/assets/images/healings img .jpeg"
      />
      <FeatureStrip
        items={[
          { title: "Energy Balance", text: "Restore flow through subtle energy work", icon: PiFlowerLotus },
          { title: "Emotional Calm", text: "Support release and nervous reset", icon: PiHeart },
          { title: "Guided Integration", text: "Aftercare practices for daily life", icon: PiHandsPraying },
          { title: "Sacred Space", text: "Held gently with care and intention", icon: PiSparkle },
        ]}
      />
      <section className="public-section">
        <CatalogToolbar filters={["All Healings", "Reiki", "Sound", "Crystal", "Chakra", "Energy Work"]} />
        <PublicCardGrid>
          {(modalities || []).map((item) => {
            const id = item.id ?? item._id;
            const price = derivePublicPrice(item);
            return (
              <PublicCatalogCard
                key={id}
                href={`/healings/${id}`}
                title={item.title}
                description={item.description}
                image={item.image}
                price={price.price}
                oldPrice={price.oldPrice}
                meta={[
                  { label: formatPublicDuration(null, null, null, item.durationMinutes) },
                  { label: `${item.benefits?.length || 3} Benefits` },
                  { label: "Restorative" },
                ]}
                cta="View Healing"
              />
            );
          })}
        </PublicCardGrid>
      </section>
      <WhyLearnBand
        title="Why Choose Healing?"
        items={[
          { title: "Release Blocks", text: "Clear stagnant emotional and energetic patterns" },
          { title: "Restore Balance", text: "Support mind, body and subtle energy" },
          { title: "Deep Rest", text: "Create space for nervous-system calm" },
          { title: "Gentle Guidance", text: "Receive grounded aftercare practices" },
        ]}
      />
      <SubscribeBand title="Receive healing notes" text="Get gentle practices, session updates and sacred reminders." />
    </PublicPageShell>
  );
}
