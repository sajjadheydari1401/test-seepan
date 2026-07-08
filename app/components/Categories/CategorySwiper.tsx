/* eslint-disable react-hooks/refs */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import CategoryCard from "./CategoryCard";
import { RefObject } from "react";

type CategoryCardData = {
  id: string;
  key: string;
  title: string;
  discount: string;
  image: string;
};

type Props = {
  cards: CategoryCardData[];
  prevRef: RefObject<HTMLButtonElement | null>;
  nextRef: RefObject<HTMLButtonElement | null>;
  onSwiperInit: (swiper: SwiperType) => void;
};

export const CategorySwiper = ({
  cards,
  prevRef,
  nextRef,
  onSwiperInit,
}: Props) => {
  return (
    <Swiper
      onSwiper={onSwiperInit}
      modules={[Navigation]}
      slidesPerView={1}
      spaceBetween={40}
      breakpoints={{ 765: { slidesPerView: 2.7, spaceBetween: 450 } }}
      centeredSlides
      initialSlide={Math.floor(cards.length / 2)}
      allowTouchMove={false}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      onBeforeInit={(swiper: SwiperType) => {
        // @ts-ignore
        swiper.params.navigation.prevEl = prevRef.current;
        // @ts-ignore
        swiper.params.navigation.nextEl = nextRef.current;
      }}
    >
      {cards.map((card) => (
        <SwiperSlide
          key={card.id}
          className="
            transition-all duration-300
            md:scale-60 
            md:[&.swiper-slide-prev]:-rotate-10
            md:[&.swiper-slide-prev]:translate-y-20
            md:[&.swiper-slide-prev]:-translate-x-30
            md:[&.swiper-slide-next]:rotate-12
            md:[&.swiper-slide-next]:-translate-x-53
            md:[&.swiper-slide-active]:scale-100
            md:[&.swiper-slide-active]:rotate-0
            md:[&.swiper-slide-active]:-translate-x-70
            md:[&.swiper-slide-active]:translate-y-0
          "
        >
          <CategoryCard
            key={card.key}
            categoryKey={card.key}
            image={card.image}
            title={card.title}
            discount={card.discount}
            className="max-md:h-86.25 max-md:rounded-l-none! max-md:rounded-r-2xl! max-md:w-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
