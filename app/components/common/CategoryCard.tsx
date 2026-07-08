"use client";

import Image from "next/image";
import discountStarIcon from "../../../public/icons/discount-star-icon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import EventCard from "./EventCard";
import { eventCards } from "@/app/data/events";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

type Props = {
  image: string;
  title: string;
  discount: string;
  className?: string;
};

const CategoryCard = ({ className = "", discount, image, title }: Props) => {
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
            src={image}
            alt="logo"
            width={64}
            height={64}
            className="max-md:w-12 max-md:h-12"
          />
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        slidesPerView={2}
        spaceBetween={20}
        breakpoints={{
          765: { slidesPerView: 3, spaceBetween: 20 },
        }}
      >
        {/* {eventCards.map((card, index) => (
          <SwiperSlide key={index} className="max-md:w-auto!">
            <EventCard
              {...card}
              className="md:border md:border-[#CBCBCB] max-w-full md:max-w-72.75 max-md:p-0! max-md:w-40"
              imageClassName="h-[160px]! max-md:w-[160px]! md:h-[200px] md:h-[259px]! mb-1!"
              priceClassName="text-[12px] md:text-[14px]!"
            />
          </SwiperSlide>
        ))} */}
      </Swiper>
    </div>
  );
};

export default CategoryCard;
