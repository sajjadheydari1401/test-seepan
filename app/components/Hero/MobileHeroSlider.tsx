"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { transformEventToCardProps } from "@/app/helper/event";
import GlassyEventCard from "../common/GlassyEventCard";
import { Event } from "@/app/types/event";

type Props = {
  cards: Event[];
};

export default function MobileHeroSlider({ cards }: Props) {
  if (!cards || cards.length === 0) {
    return null;
  }

  return (
    <div className="w-full py-8">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1.7}
        centeredSlides
        initialSlide={Math.floor(cards.length / 2)}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={cards.length > 3}
        className="overflow-visible!"
      >
        {cards.map((card, index) => (
          <SwiperSlide
            key={card.publicId || index}
            className="transition-all duration-300 scale-90
                 [&.swiper-slide-active]:scale-125
                 [&.swiper-slide-active]:-translate-y-30
                 [&.swiper-slide-active]:z-150!"
          >
            <GlassyEventCard
              {...transformEventToCardProps(card)}
              className=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
