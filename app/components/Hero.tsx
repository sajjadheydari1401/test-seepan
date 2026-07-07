import OrbitSlider from "./OrbitSlider";
import HeroContent from "./HeroContent";
import { eventCards } from "../data/events";

export default function Hero() {
  return (
    <section
      className="relative h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero-bg.png')",
      }}
    >
      <OrbitSlider side="left" cards={eventCards} />

      <OrbitSlider side="right" cards={eventCards} />

      <HeroContent />
    </section>
  );
}
