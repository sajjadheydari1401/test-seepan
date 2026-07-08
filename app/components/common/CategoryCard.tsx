"use client";

import Image from "next/image";
import discountStarIcon from "../../../public/icons/discount-star-icon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import EventCard from "./EventCard";
import { Navigation } from "swiper/modules";
import { useCategoryByKey } from "@/app/hooks/useCategoryExperiences";
import categoryLogo from "../../../public/icons/category-icon.svg";

import "swiper/css";
import "swiper/css/navigation";

type Props = {
  image: string;
  title: string;
  discount: string;
  categoryKey: string;
  className?: string;
};

const CategoryCard = ({
  className = "",
  discount,
  image,
  title,
  categoryKey,
}: Props) => {
  const { experiences, isLoading, isError, error } =
    useCategoryByKey(categoryKey);

  if (isLoading) {
    return (
      <div
        className={`md:w-242 h-auto md:h-142.75 overflow-hidden rounded-4xl bg-white p-3 md:pt-7.5 md:pr-12 md:pb-13.25 md:pl-8 ${className}`}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="relative shrink-0">
            <div className="w-13 h-13 md:w-20 md:h-20 bg-gray-200 rounded-full animate-pulse" />
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-20 h-6 bg-gray-200 rounded animate-pulse" />
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 rounded-full animate-pulse" />
          </div>
        </div>
        <div className="flex gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-40 h-56 bg-gray-200 rounded-xl animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div
        className={`md:w-242 h-auto md:h-142.75 overflow-hidden rounded-4xl bg-white p-3 md:pt-7.5 md:pr-12 md:pb-13.25 md:pl-8 ${className}`}
      >
        <div className="text-center text-red-500 py-8">
          <p>خطا در بارگذاری رویدادها</p>
          <p className="text-sm text-gray-500">
            {error?.message || "لطفاً دوباره تلاش کنید"}
          </p>
        </div>
      </div>
    );
  }

  const displayExperiences = experiences || [];

  return (
    <div
      className={`md:w-242 h-auto md:h-142.75 overflow-hidden rounded-4xl bg-white p-3 md:pt-7.5 md:pr-12 md:pb-13.25 md:pl-8 ${className}`}
    >
      <div className="flex justify-between items-center mb-6">
        <div className="relative shrink-0">
          <Image
            src={discountStarIcon}
            alt="star"
            width={81.24}
            height={81.24}
            className="max-md:w-13 max-md:h-13"
          />
          <div className="text-white flex flex-col absolute md:left-[22%] top-1 left-[18%] text-center -rotate-10">
            <span className="text-[10px] md:text-base">تا</span>
            <span className="text-[16px] md:text-2xl">{discount}%</span>
          </div>
        </div>

        <div className="flex gap-2 items-center max-md:gap-1">
          <h2 className="text-xl md:text-2xl text-[#1D60A4] max-md:text-lg">
            {title}
          </h2>
          <Image
            src={image || categoryLogo}
            alt="logo"
            width={64}
            height={64}
            className="max-md:w-12 max-md:h-12"
          />
        </div>
      </div>

      {displayExperiences?.length > 0 ? (
        <Swiper
          modules={[Navigation]}
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            765: { slidesPerView: 3, spaceBetween: 20 },
          }}
        >
          {displayExperiences?.map((card) => (
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
      ) : (
        <div className="text-center text-gray-500 py-8">
          <p>هیچ تجربه‌ای در این دسته‌بندی یافت نشد</p>
        </div>
      )}
    </div>
  );
};

export default CategoryCard;
