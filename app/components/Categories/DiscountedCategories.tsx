/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/refs */
"use client";

import { useDiscountedCategories } from "@/app/hooks/useDiscountedCategories";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { SectionHeader } from "../common/SectionHeader";
import { CategorySwiper } from "./CategorySwiper";
import { NavigationButtons } from "../common/NavigationButtons";
import { DiscountedCategoriesSkeleton } from "./DiscountedCategoriesSkeleton";
import { ErrorDisplay } from "../common/ErrorDisplay";
import { EmptyState } from "../common/EmptyState";

const DiscountedCategories = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [_, setSwiperInstance] = useState<SwiperType | null>(null);

  const { categoryCards, isLoading, isError, error, hasCategories } =
    useDiscountedCategories();

  const handleSwiperInit = (swiper: SwiperType) => {
    setSwiperInstance(swiper);
  };

  // Loading state
  if (isLoading) {
    return <DiscountedCategoriesSkeleton />;
  }

  // Error state
  if (isError) {
    return <ErrorDisplay message={error?.message || ""} />;
  }

  // Empty state
  if (!hasCategories) {
    return (
      <section
        className="relative md:h-216 overflow-hidden bg-cover bg-center md:mt-30 md:py-9 pt-5 pb-8 max-md:bottom-25 max-md:pr-4"
        style={{
          backgroundImage: "url('/images/categories-bg.svg')",
        }}
      >
        <SectionHeader
          title="دسته بندی های پر تخفیف"
          subtitle="تخفیف‌های ویژه رو بر اساس علاقه‌ات پیدا کن"
        />
        <EmptyState message="هیچ دسته‌بندی‌ای یافت نشد" />
      </section>
    );
  }

  return (
    <section
      className="relative md:h-216 overflow-hidden bg-cover bg-center md:mt-30 md:py-9 pt-5 pb-8 max-md:bottom-25 max-md:pr-4"
      style={{
        backgroundImage: "url('/images/categories-bg.svg')",
      }}
    >
      <SectionHeader
        title="دسته بندی های پر تخفیف"
        subtitle="تخفیف‌های ویژه رو بر اساس علاقه‌ات پیدا کن"
      />

      <CategorySwiper
        cards={categoryCards}
        prevRef={prevRef}
        nextRef={nextRef}
        onSwiperInit={handleSwiperInit}
      />

      <NavigationButtons prevRef={prevRef} nextRef={nextRef} />
    </section>
  );
};

export default DiscountedCategories;
