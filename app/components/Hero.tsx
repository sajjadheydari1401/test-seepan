import OrbitSlider from "./OrbitSlider";
import MobileOrbitSlider from "./MobileOrbitSlider";
import { eventCards } from "../data/events";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section
      className="relative h-232 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero-bg.png')",
      }}
    >
      {/* Desktop */}
      <div className="hidden lg:block">
        <OrbitSlider side="left" cards={eventCards} />
        <OrbitSlider side="right" cards={eventCards} />
      </div>

      {/* Mobile & Tablet */}
      <div className="lg:hidden absolute bottom-57.5 w-full left-0">
        <MobileOrbitSlider cards={eventCards} />
      </div>

      <HeroContent />
    </section>
  );
}
