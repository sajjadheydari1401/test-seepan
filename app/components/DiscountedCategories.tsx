/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/refs */
"use client";

import CategoryCard from "./common/CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { categoryCards } from "@/app/data/events";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import leftArrow from "../../public/icons/left-icon.svg";
import rightArrow from "../../public/icons/right-icon.svg";
import Image from "next/image";

const DiscountedCategories = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section
      className="relative md:h-216 overflow-hidden bg-cover bg-center md:mt-30 md:py-9 pt-5 pb-8 max-md:bottom-25 max-md:pr-4"
      style={{
        backgroundImage: "url('/images/categories-bg.svg')",
      }}
    >
      <p className="md:text-[32px] text-[24px] text-[#1E1E1E] text-center font-semibold md:font-bold">
        دسته بندی های پر تخفیف
      </p>
      <p className="mt-2 text-[14px] md:text-[16px] text-[#1E1E1E] text-center mb-4 md:mb-8">
        تخفیف‌های ویژه رو بر اساس علاقه‌ات پیدا کن
      </p>

      <Swiper
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
        }}
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={40}
        breakpoints={{ 765: { slidesPerView: 2.7, spaceBetween: 450 } }}
        centeredSlides
        initialSlide={Math.floor(categoryCards.length / 2)}
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
        {categoryCards.map((card, index) => (
          <SwiperSlide
            key={index}
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
              {...card}
              className="max-md:h-86.25 max-md:rounded-l-none! max-md:rounded-r-2xl! max-md:w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-4 mt-4 md:mt-18 max-md:pl-4">
        <button
          ref={prevRef}
          className="cursor-pointer flex w-6 h-6 md:h-10 md:w-10 items-center justify-center rounded-lg md:rounded border border-white bg-[radial-gradient(circle,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0.1)_100%)]"
          aria-label="Previous"
        >
          <Image src={leftArrow} alt="Previous" width={24} height={24} />
        </button>

        <button
          ref={nextRef}
          className="cursor-pointer flex w-6 h-6 md:h-10 md:w-10 items-center justify-center rounded-lg md:rounded bg-transparent border border-white bg-[radial-gradient(circle,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0.1)_100%)]"
          aria-label="Next"
        >
          <Image src={rightArrow} alt="Next" width={24} height={24} />
        </button>
      </div>
    </section>
  );
};

export default DiscountedCategories;
