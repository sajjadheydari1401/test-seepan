"use client";

import Image from "next/image";
import discountStarIcon from "../../../public/icons/discount-star-icon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import EventCard from "./EventCard";
import { eventCards } from "@/app/data/events";
import { Autoplay, Navigation } from "swiper/modules";

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
      className={`w-242 h-142.75 overflow-hidden rounded-4xl bg-white pt-7.5 pr-12 pb-13.25 pl-8 ${className}`}
    >
      <div className="flex justify-between items-center mb-6">
        <div className="relative">
          <Image
            src={discountStarIcon}
            alt="star"
            width={81.24}
            height={81.24}
            className=""
          />
          <div className="text-white flex flex-col absolute top-3 left-[22%] text-center -rotate-10">
            <span>تا</span>
            <span className="text-2xl">{discount}%</span>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <h2 className="text-2xl text-[#1D60A4]">{title}</h2>
          <Image src={image} alt="logo" width={64} height={64} className="" />
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={2.7}
        spaceBetween={16}
        centeredSlides
        // autoplay
        loop
      >
        {eventCards.map((card, index) => (
          <SwiperSlide key={index}>
            <EventCard
              {...card}
              imageClassName="h-[259px]! mb-1!"
              className="border border-[#CBCBCB] "
              priceClassName="text-[14px]!"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoryCard;
