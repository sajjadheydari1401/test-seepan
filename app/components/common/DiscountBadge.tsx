import Image from "next/image";
import discountStarIcon from "../../../public/icons/discount-star-icon.svg";

type DiscountBadgeProps = {
  discount: string;
};

export const DiscountBadge = ({ discount }: DiscountBadgeProps) => {
  return (
    <div className="relative shrink-0">
      <Image
        src={discountStarIcon}
        alt="star"
        width={81.24}
        height={81.24}
        className="max-md:w-13 max-md:h-13"
      />
      <div className="text-white flex flex-col absolute md:left-[30%] md:top-3 top-1 left-[30%] text-center -rotate-10">
        <span className="text-[10px] md:text-base">تا</span>
        <span className="text-[16px] md:text-2xl">{discount}%</span>
      </div>
    </div>
  );
};
