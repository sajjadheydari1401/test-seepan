import Image from "next/image";
import EventCard from "./EventCard";

const cards = [
  {
    image: "/slide-pic-1.png",
    title: "جشنواره هنری",
    price: "۲,۸۰۰,۰۰۰",
    currency: "تومان",
    oldPrice: "۳,۲۰۰,۰۰۰",
    discount: "۳۸٪",
  },
  {
    image: "/slide-pic-2.png",
    title: "بازی",
    price: "۱,۹۵۰,۰۰۰",
    currency: "تومان",
    oldPrice: "۲,۵۰۰,۰۰۰",
    discount: "۴۲٪",
  },
];

const leftCards = [...cards, ...cards];
const rightCards = [...cards, ...cards];

export default function Hero() {
  return (
    <section
      className="relative h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      {/* LEFT */}

      <div className="absolute -left-82.5 top-1/3">
        <div className="relative w-130 h-130">
          {leftCards.map((card, i) => (
            <div
              key={i}
              className="absolute left-1/2 animate-orbit-left"
              style={{
                animationDelay: `${-i * 5}s`,
              }}
            >
              <EventCard {...card} />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}

      <div className="absolute -right-15 top-1/3">
        <div className="relative w-130 h-130">
          {rightCards.map((card, i) => (
            <div
              key={i}
              className="absolute left-1/2 animate-orbit-right"
              style={{
                animationDelay: `${-i * 5}s`,
              }}
            >
              <EventCard {...card} />
            </div>
          ))}
        </div>
      </div>

      {/* CENTER */}

      <div className="flex h-full items-start justify-center mt-32">
        <div className="relative w-[320px] md:w-139">
          <Image
            src="/hero-center-group.png"
            alt=""
            width={556}
            height={433}
            className="w-full h-auto"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center left-10 bottom-8">
            <div className="mt-40 text-3xl md:text-5xl font-rokh text-[#1e1e1e]">
              رویـــــداد های
            </div>

            <div className="text-3xl md:text-5xl font-rokh text-[#ff383c] mt-6">
              تخفیفــــــــ دار
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
