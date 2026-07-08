import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { CategoryEventCardProps } from "../../types/category";
import EventCard from "./EventCard";

type ExperiencesSwiperProps = {
  experiences: CategoryEventCardProps[];
};

export const ExperiencesSwiper = ({ experiences }: ExperiencesSwiperProps) => {
  if (experiences.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        <p>هیچ تجربه‌ای در این دسته‌بندی یافت نشد</p>
      </div>
    );
  }

  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={2}
      spaceBetween={20}
      breakpoints={{
        765: { slidesPerView: 3, spaceBetween: 20 },
      }}
    >
      {experiences.map((card) => (
        <SwiperSlide key={card.id} className="max-md:w-auto!">
          <EventCard
            {...card}
            className="md:border md:border-[#CBCBCB] max-w-full md:max-w-72.75 max-md:p-0! max-md:w-40"
            imageClassName="h-[160px]! max-md:w-[160px]! md:h-[200px] md:h-[259px]! mb-1!"
            priceClassName="text-[12px] md:text-[14px]!"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
