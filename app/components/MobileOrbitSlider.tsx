"use client";

import { Event } from "../types/event";
import GlassyEventCard from "./common/GlassyEventCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

type Props = {
  cards: Event[];
};

export default function MobileOrbitSlider({ cards }: Props) {
  return (
    <div className="w-full py-8">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1.7}
        centeredSlides
        initialSlide={Math.floor(cards.length / 2)}
        autoplay
        className="!overflow-visible"
      >
        {cards.map((card, index) => (
          <SwiperSlide
            key={index}
            className="transition-all duration-300 scale-90
                 [&.swiper-slide-active]:scale-125
                 [&.swiper-slide-active]:-translate-y-30
                 [&.swiper-slide-active]:z-150!"
          >
            <GlassyEventCard {...card} className="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
