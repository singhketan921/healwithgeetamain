import {
  CatalogToolbar,
  FeatureStrip,
  PublicHero,
  PublicPageShell,
  SubscribeBand,
  WhyLearnBand,
} from "@/components/PublicPageUI";
import FHMusicLibrary from "@/musiccomponents/FHMusicLibrary";
import { PiHeartbeat, PiMusicNotes, PiSparkle, PiWaveform } from "react-icons/pi";
import { fetchMusicTracks } from "@/lib/services/musicService";

export default async function FHMusicPage() {
  const tracks = await fetchMusicTracks();

  return (
    <PublicPageShell>
      <PublicHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "FH Music" }]}
        title="Sound Journeys for Rest, Ritual & Renewal"
        description="Press play and let the soundwork unfold. Each track is designed for meditation, release and energetic alignment."
        image="/assets/images/hero 2.png"
      />
      <FeatureStrip
        items={[
          { title: "Guided Sound", text: "Tracks for ritual and reflection", icon: PiMusicNotes },
          { title: "Nervous Reset", text: "Soft support for calming the body", icon: PiHeartbeat },
          { title: "Energy Flow", text: "Sound textures for inner movement", icon: PiWaveform },
          { title: "Sacred Space", text: "Create a calm listening ritual", icon: PiSparkle },
        ]}
      />
      <section className="public-section">
        <CatalogToolbar filters={["All Tracks", "Meditation", "Healing", "Sleep", "Energy Reset"]} sortLabel="Sort by Latest" />
        <FHMusicLibrary tracks={tracks} compact />
      </section>
      <WhyLearnBand
        title="Why Listen?"
        items={[
          { title: "Deep Rest", text: "Support a calmer internal rhythm" },
          { title: "Ritual Focus", text: "Create atmosphere before practice" },
          { title: "Emotional Ease", text: "Let sound soften mental noise" },
          { title: "Repeatable Practice", text: "Return to the tracks anytime" },
        ]}
      />
      <SubscribeBand title="Stay tuned for new tracks" text="Receive new sound journeys and meditation releases." />
    </PublicPageShell>
  );
}
