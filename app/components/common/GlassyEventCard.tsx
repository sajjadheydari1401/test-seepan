"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  image: string;
  title: string;
  price: string;
  oldPrice: string;
  discount: string;
  currency: string;
  providerName?: string;
  providerRole?: string;
  className?: string;
}

export default function GlassyEventCard({
  image,
  title,
  price,
  oldPrice,
  discount,
  currency,
  providerName,
  providerRole,
  className = "",
}: Props) {
  const [imgError, setImgError] = useState(false);
  const [imgSrc, setImgSrc] = useState(image || "/images/default-event.png");

  const displayTitle = title || "بدون عنوان";
  const displayCurrency = currency || "تومان";

  const handleImageError = () => {
    if (!imgError) {
      setImgError(true);
      setImgSrc("/images/default-event.png");
    }
  };

  return (
    <div className={`w-65 h-65 relative rounded-2xl! ${className}`}>
      <Image
        src={imgSrc}
        alt={displayTitle}
        fill
        className="w-full h-full object-cover rounded-2xl!"
        sizes="(max-width: 768px) 100vw, 260px"
        priority={false}
        onError={handleImageError}
      />

      <div
        className="absolute
          left-1/2
          -translate-x-1/2
          md:-bottom-15
          -bottom-7
          z-50
          md:w-5/6
          w-1.2
          rounded-[20px]
          border border-white
          bg-white/15
          md:p-2.5
          px-5
          backdrop-blur-md"
      >
        <h3 className="font-bold text-center text-sm md:text-base">
          {displayTitle}
        </h3>

        {/* Provider info (optional) */}
        {(providerName || providerRole) && (
          <div className="text-center text-xs text-gray-600 mt-1">
            {providerName && <span>{providerName}</span>}
            {providerName && providerRole && <span className="mx-1">•</span>}
            {providerRole && (
              <span className="text-gray-500">{providerRole}</span>
            )}
          </div>
        )}

        <div className="flex items-center justify-center gap-2.5 mt-2">
          {/* Discount badge */}
          {discount && (
            <div className="bg-red-500 text-white pl-1 pr-3 pb-1 pt-0.5 max-h-max text-center text-[12px] [clip-path:polygon(0_23%,0_80%,59%_81%,88%_54%,60%_24%)]">
              {discount}
            </div>
          )}

          <div className="flex items-center md:gap-2 md:mt-3 flex-col">
            {/* Current price */}
            <div dir="ltr" className="flex items-center gap-1 text-[#1D60A4]">
              <span>{displayCurrency}</span>
              <span>{price}</span>
            </div>

            {/* Old price */}
            {oldPrice && (
              <div
                dir="ltr"
                className="flex items-center gap-1 text-[#1E1E1E] text-[14px] line-through font-light!"
              >
                <span>{displayCurrency}</span>
                <p>{oldPrice}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
