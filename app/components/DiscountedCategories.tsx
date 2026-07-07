"use client";

import CategoryCard from "./common/CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { categoryCards } from "@/app/data/events";
import { Autoplay, Navigation } from "swiper/modules";

const DiscountedCategories = () => {
  return (
    <section
      className="relative h-216.5 overflow-hidden bg-cover bg-center md:mt-30 py-9"
      style={{
        backgroundImage: "url('/images/categories-bg.svg')",
      }}
    >
      <p className="md:text-[32px] text-[#1E1E1E] text-center font-semibold md:font-bold">
        دسته بندی های پر تخفیف
      </p>
      <p className="mt-2 text-[12px] md:text-[16px] text-[#716E6E] text-center md:mb-8">
        تخفیف‌های ویژه رو بر اساس علاقه‌ات پیدا کن.
      </p>

      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={2.7}
        spaceBetween={450}
        centeredSlides
        navigation
        loop
        autoplay
      >
        {categoryCards.map((card, index) => (
          <SwiperSlide
            key={index}
            className="
              transition-all duration-300
              scale-60 

              [&.swiper-slide-prev]:-rotate-10
              [&.swiper-slide-prev]:translate-y-20
              [&.swiper-slide-prev]:-translate-x-30


              [&.swiper-slide-next]:rotate-12
              [&.swiper-slide-next]:-translate-x-53

              [&.swiper-slide-active]:scale-100
              [&.swiper-slide-active]:rotate-0
              [&.swiper-slide-active]:-translate-x-70
              [&.swiper-slide-active]:translate-y-0
           "
          >
            <CategoryCard {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default DiscountedCategories;
