import Image from "next/image";
import bookmarkIcon from "../../../public/icons/bookmark-icon.svg";

type Props = {
  image: string;
  title: string;
  price: string;
  currency: string;
  className?: string;
  imageClassName?: string;
};

const FeaturedEventCard = ({
  image,
  title,
  price,
  currency,
  className = "",
  imageClassName = "",
}: Props) => {
  return (
    <div
      className={`w-full h-full overflow-hidden rounded-2xl bg-white p-4 ${className}`}
    >
      <div className={`relative h-full w-full rounded-b-2xl ${imageClassName}`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-b-2xl"
        />

        {/* Bookmark Icon */}
        <Image src={bookmarkIcon} width={32} height={32} alt={"save"} className="absolute right-4 top-4 cursor-pointer" />
      </div>

      <div className="mt-5.75">
        <div className="text-right font-bold text-gray-900">{title}</div>

        <div className="flex items-center justify-end gap-1 text-[#1E1E1E]">
          <span className="text-[16px]">{currency}</span>
          <span className="text-[12px]">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedEventCard;
