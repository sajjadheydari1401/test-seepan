import { Event } from "../types/event";
import GlassyEventCard from "./common/GlassyEventCard";

type OrbitSliderProps = {
  cards: Event[];
  side: "left" | "right";
};

export default function OrbitSlider({ cards, side }: OrbitSliderProps) {
  const duplicatedCards = [...cards, ...cards];

  return (
    <div
      className={`absolute top-1/3 ${
        side === "left" ? "-left-82.5" : "-right-15"
      }`}
    >
      <div className="relative h-130 w-130">
        {duplicatedCards.map((card, index) => (
          <div
            key={index}
            className={`absolute left-1/2 ${
              side === "left" ? "animate-orbit-left" : "animate-orbit-right"
            }`}
            style={{
              animationDelay: `${-index * 5}s`,
            }}
          >
            <GlassyEventCard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}
