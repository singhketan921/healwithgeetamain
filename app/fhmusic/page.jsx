import FHMusicHero from "@/musiccomponents/FHMusicHero";
import FHMusicLibrary from "@/musiccomponents/FHMusicLibrary";
import { fetchMusicTracks } from "@/lib/services/musicService";

export default async function FHMusicPage() {
  const tracks = await fetchMusicTracks();

  return (
    <div className="flex flex-col items-center overflow-x-hidden scroll-smooth">
      <section id="hero" className="w-full">
        <FHMusicHero />
      </section>

      <section id="library" className="w-full">
        <FHMusicLibrary tracks={tracks} />
      </section>
    </div>
  );
}
