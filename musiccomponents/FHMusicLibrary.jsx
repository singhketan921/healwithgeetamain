"use client";

import { useMemo, useRef, useState } from "react";

function normalizeTracks(tracks) {
  return (tracks || []).filter((track) => track?.active !== false);
}

export default function FHMusicLibrary({ tracks = [] }) {
  const activeTracks = useMemo(() => normalizeTracks(tracks), [tracks]);
  const audioRefs = useRef({});
  const [activeId, setActiveId] = useState(null);

  const handlePlay = (id) => {
    setActiveId(id);
    Object.entries(audioRefs.current).forEach(([key, audio]) => {
      if (key !== id && audio && !audio.paused) {
        audio.pause();
      }
    });
  };

  const handleStop = (id) => {
    if (activeId === id) {
      setActiveId(null);
    }
  };

  if (activeTracks.length === 0) {
    return (
      <section className="w-full bg-[#f8f3ef] py-20">
        <div className="mx-auto max-w-[900px] px-6 text-center text-[#ad7f53]">
          <p className="text-[12px] uppercase tracking-[0.32em]">
            FH Music
          </p>
          <h2 className="mt-3 text-[28px] font-normal sm:text-[36px]">
            No tracks available
          </h2>
          <p className="mt-4 text-[14px] leading-[1.7] sm:text-[16px]">
            New sound journeys will appear here soon. Check back for the next release.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="library"
      className="bg-[#f8f3ef] py-20 text-[#ad7f53] sm:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
        <div className="mx-auto mb-14 max-w-[760px] text-center sm:mb-16">
          <p className="mb-3 flex items-center justify-center gap-2 text-[14px] font-medium text-[#ad7f53] sm:text-[16px]">
            <span className="text-[18px] leading-none">✽</span>
            The Library
          </p>
          <h2 className="text-[40px] font-normal leading-[0.95] text-[#ad7f53] sm:text-[56px] md:text-[64px]">
            FH Music
            <span className="mt-2 block font-serif text-[44px] italic leading-none sm:text-[60px] md:text-[68px]">
              Sessions
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-[620px] text-[15px] leading-[1.7] text-[#ad7f53]/85 sm:text-[16px]">
            Press play and let the soundwork unfold. Each track is designed for ritual, rest,
            and renewal.
          </p>
        </div>

        <div className="grid grid-cols-2 border-l border-t border-[#c99b74] lg:grid-cols-3">
          {activeTracks.map((track) => {
            const trackId = track.id ?? track._id ?? track.title;
            const isActive = activeId === trackId;

            return (
              <article
                key={trackId}
                className="group relative min-h-[380px] overflow-hidden border-b border-r border-[#c99b74] bg-[#f8f3ef] p-4 transition-colors duration-300 hover:bg-[#ad7f53] sm:min-h-[600px] sm:p-10 lg:p-[72px]"
              >
                <div className="relative mb-4 w-full sm:mb-8">
                  <img
                    src={track.coverImage || "/assets/images/hero 2.png"}
                    alt={track.title || "FH Music track"}
                    className="aspect-[1.45/1] w-full object-cover"
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-black/10 flex items-end justify-center pb-4">
                      <div className="audio-visualizer is-active">
                        {Array.from({ length: 12 }).map((_, idx) => (
                          <span
                            key={idx}
                            className="audio-bar"
                            style={{ animationDelay: `${idx * 0.08}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex h-full flex-col items-start">
                  <div className="mb-2 text-[10px] uppercase tracking-[0.12em] text-[#ad7f53]/80 transition-colors duration-300 group-hover:text-white/80 sm:mb-3 sm:text-[12px] sm:tracking-[0.14em]">
                    {track.artist || "FH Music"}
                  </div>
                  <h3 className="mb-4 text-[18px] font-normal leading-tight text-[#ad7f53] transition-colors duration-300 group-hover:text-white sm:mb-6 sm:text-[28px]">
                    {track.title}
                  </h3>
                  {track.description ? (
                    <p className="mb-4 max-h-[4.1em] max-w-[320px] overflow-hidden text-[12px] leading-[1.35] text-[#ad7f53] transition-colors duration-300 preserve-format group-hover:text-white/90 sm:mb-8 sm:max-h-none sm:text-[15px]">
                      {track.description}
                    </p>
                  ) : null}
                  <div className="mt-auto w-full space-y-2 sm:space-y-3">
                    <audio
                      ref={(node) => {
                        if (node) {
                          audioRefs.current[trackId] = node;
                        }
                      }}
                      controls
                      onPlay={() => handlePlay(trackId)}
                      onPause={() => handleStop(trackId)}
                      onEnded={() => handleStop(trackId)}
                      className="w-full"
                    >
                      <source src={track.audioUrl} />
                      Your browser does not support the audio element.
                    </audio>
                    <div className={`audio-visualizer ${isActive ? "is-active" : ""}`}>
                      {Array.from({ length: 12 }).map((_, idx) => (
                        <span
                          key={idx}
                          className="audio-bar"
                          style={{ animationDelay: `${idx * 0.08}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
