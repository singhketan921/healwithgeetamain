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
          { title: "Energy Balance", text: "Restore the flow of life force energy through Reiki and chakra work", icon: PiFlowerLotus },
          { title: "Emotional Calm", text: "Support stress, anxiety, pain and emotional heaviness through healing", icon: PiHeart },
          { title: "Guided Integration", text: "Healing may combine Reiki, sound, crystals, meditation and counselling", icon: PiHandsPraying },
          { title: "Held with Care", text: "Sessions are shaped according to aura, chakras, symptoms and life history", icon: PiSparkle },
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
          { title: "Release Blocks", text: "Reiki helps remove energetic blocks from the physical and spiritual systems" },
          { title: "Restore Balance", text: "Balanced chakras support health, emotions and spiritual well-being" },
          { title: "Deep Rest", text: "Sound and mantra healing relax the mind and reduce stress" },
          { title: "Grounded Aftercare", text: "Healing is offered as an aid alongside responsible medical care where needed" },
        ]}
      />
      <SubscribeBand title="Receive healing notes" text="Get gentle practices, session updates and grounded reminders for energetic balance." />
    </PublicPageShell>
  );
}
