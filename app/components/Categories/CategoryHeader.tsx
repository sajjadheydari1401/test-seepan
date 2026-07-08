import Image from "next/image";
import categoryLogo from "../../../public/icons/category-icon.svg";
import { DiscountBadge } from "../common/DiscountBadge";

type CategoryHeaderProps = {
  title: string;
  image?: string;
};

export const CategoryHeader = ({ title, image }: CategoryHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <DiscountBadge discount="15" />{" "}
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
  );
};
