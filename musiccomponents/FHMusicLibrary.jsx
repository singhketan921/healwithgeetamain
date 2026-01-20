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
      <section className="w-full bg-[#f7f4f0] py-20">
        <div className="mx-auto max-w-[900px] px-6 text-center text-[#6b625a]">
          <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
            FH Music
          </p>
          <h2 className="mt-3 text-[28px] sm:text-[36px] font-semibold tracking-[0.1em]">
            No tracks available
          </h2>
          <p className="mt-4 text-[14px] sm:text-[16px] leading-[1.7] text-[#7a736c]">
            New sound journeys will appear here soon. Check back for the next release.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="library"
      className="py-24 text-[#6b625a]"
      style={{ background: "linear-gradient(180deg, #F9F4E8 0%, #FFFFFF 100%)" }}
    >
      <div className="mx-auto max-w-[1320px] px-6 space-y-12">
        <div className="space-y-4 max-w-[720px] mx-auto text-center">
          <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
            The Library
          </p>
          <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-semibold tracking-[0.14em] text-[#6b625a]">
            FH Music Sessions
          </h2>
          <div className="mx-auto h-[2px] w-16 rounded-full bg-[#d8cfc6]" />
          <p className="text-[15px] sm:text-[17px] leading-[1.7] text-[#7a736c]">
            Press play and let the soundwork unfold. Each track is designed for ritual, rest,
            and renewal.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activeTracks.map((track) => {
            const trackId = track.id ?? track._id ?? track.title;
            const isActive = activeId === trackId;

            return (
              <article
                key={trackId}
                className="rounded-[18px] border border-[#e7dfd6] bg-[#fbf8f5] shadow-[0_16px_32px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col"
              >
                <div className="relative">
                  <img
                    src={track.coverImage || "/assets/images/hero 2.png"}
                    alt={track.title || "FH Music track"}
                    className="w-full h-52 object-cover"
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
                <div className="flex flex-col h-full p-6 space-y-4">
                  <div className="text-[12px] uppercase tracking-[0.2em] text-[#9a938c]">
                    {track.artist || "FH Music"}
                  </div>
                  <h3 className="text-[20px] sm:text-[22px] font-semibold leading-snug">
                    {track.title}
                  </h3>
                  {track.description ? (
                    <p className="text-[14px] text-[#7a736c] leading-[1.7] preserve-format">
                      {track.description}
                    </p>
                  ) : null}
                  <div className="mt-auto space-y-3">
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
