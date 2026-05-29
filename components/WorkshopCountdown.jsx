"use client";

import { useEffect, useMemo, useState } from "react";

function getTimeLeft(target) {
  const now = Date.now();
  const distance = target - now;
  if (Number.isNaN(distance)) {
    return null;
  }
  if (distance <= 0) {
    return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);
  return { total: distance, days, hours, minutes, seconds };
}

function formatUnit(value) {
  return String(value).padStart(2, "0");
}

export default function WorkshopCountdown({ targetDateTime }) {
  const target = useMemo(() => new Date(targetDateTime).getTime(), [targetDateTime]);
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(target));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(target));
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);

  if (!timeLeft) {
    return (
      <div className="text-sm text-[#9a938c] uppercase tracking-[0.2em]">
        Schedule TBA
      </div>
    );
  }

  const labels = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
      {labels.map((item) => (
        <div
          key={item.label}
          className="border border-[#c79a72] bg-[#f8f3ef] px-3 py-5 text-center"
        >
          <div className="text-[28px] font-semibold leading-none text-[#4c4740] sm:text-[34px]">
            {formatUnit(item.value)}
          </div>
          <div className="mt-3 text-[11px] uppercase tracking-[0.24em] text-[#ad7f53]">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
