"use client";

import { useEffect, useState } from "react";
import { Event } from "../types/event";
import EventCard from "./EventCard";

type Props = {
  cards: Event[];
};

export default function MobileOrbitSlider({ cards }: Props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 5000); // pause 5s

    return () => clearInterval(id);
  }, [cards.length]);

  return (
    <div className="overflow-hidden py-8">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${active * 100}%)`,
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`w-full shrink-0 flex justify-center transition-all duration-700 ${
              active === index
                ? "-translate-y-4 scale-110"
                : "translate-y-0 scale-100"
            }`}
          >
            <EventCard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}
