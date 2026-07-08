"use client";

import { useCategoryByKey } from "@/app/hooks/useCategoryExperiences";
import { CategoryCardSkeleton } from "./CategoryCardSkeleton";
import { ErrorDisplay } from "../common/ErrorDisplay";
import { DiscountBadge } from "../common/DiscountBadge";
import categoryLogo from "../../../public/icons/category-icon.svg";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import { ExperiencesSwiper } from "../common/ExperiencesSwiper";

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
    return <CategoryCardSkeleton />;
  }

  if (isError) {
    return <ErrorDisplay message={error.message} />;
  }

  const displayExperiences = experiences || [];

  return (
    <div
      className={`md:w-242 h-auto md:h-142.75 overflow-hidden rounded-4xl bg-white p-3 md:pt-7.5 md:pr-12 md:pb-13.25 md:pl-8 ${className}`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <DiscountBadge discount={discount} />
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

      {/* Experiences */}
      <ExperiencesSwiper experiences={displayExperiences} />
    </div>
  );
};

export default CategoryCard;
