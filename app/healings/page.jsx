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

export const dynamic = "force-dynamic";

export default async function HealingsPage() {
  const modalities = await fetchHealingModalities();

  return (
    <PublicPageShell>
      <PublicHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Healings" }]}
        title="Healing Sessions for Balance, Release & Renewal"
        description="Begin with compassionate counselling, then receive energy support for emotional stress, relationship strain, energetic blocks and the patterns that feel heavy to carry alone."
        image="/assets/images/healings img .jpeg"
      />
      <FeatureStrip
        items={[
          { title: "Energy Balance", text: "Clear blocks and restore flow through subtle energy work", icon: PiFlowerLotus },
          { title: "Emotional Calm", text: "Support anxiety, heaviness and nervous-system reset", icon: PiHeart },
          { title: "Guided Integration", text: "Receive simple aftercare practices for daily life", icon: PiHandsPraying },
          { title: "Held with Care", text: "A private, intentional space for mind, body and soul", icon: PiSparkle },
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
          { title: "Release Blocks", text: "Work gently with stagnant emotional and energetic patterns" },
          { title: "Restore Balance", text: "Support mind, body, aura and subtle energy flow" },
          { title: "Deep Rest", text: "Create space for the nervous system to soften" },
          { title: "Grounded Aftercare", text: "Leave with practical steps instead of vague advice" },
        ]}
      />
      <SubscribeBand title="Receive healing notes" text="Get gentle practices, session updates and grounded reminders for energetic balance." />
    </PublicPageShell>
  );
}
