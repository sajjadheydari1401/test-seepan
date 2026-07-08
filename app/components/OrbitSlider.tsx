import { transformEventToCardProps } from "../helper/event";
import { Event } from "../types/event";
import GlassyEventCard from "./common/GlassyEventCard";

type OrbitSliderProps = {
  cards: Event[];
  side: "left" | "right";
};

export default function OrbitSlider({ cards, side }: OrbitSliderProps) {
  const duplicatedCards = [...cards, ...cards, ...cards];

  const getAnimationDuration = (count: number) => {
    // Each card takes 5 seconds, adjust for smoother animation
    return Math.max(count * 1, 30);
  };

  return (
    <div
      className={`absolute top-1/3 ${
        side === "left" ? "-left-82.5" : "-right-15"
      }`}
    >
      <div className="relative h-130 w-130">
        {duplicatedCards.map((card, index) => (
          <div
            key={`${card.publicId}-${index}`}
            className={`absolute left-1/2 ${
              side === "left" ? "animate-orbit-left" : "animate-orbit-right"
            }`}
            style={{
              animationDelay: `${-index * 5}s`,
              animationDuration: `${getAnimationDuration(duplicatedCards.length)}s`,
            }}
          >
            <GlassyEventCard {...transformEventToCardProps(card)} />
          </div>
        ))}
      </div>
    </div>
  );
}
