import Image from "next/image";
import bookmarkIcon from "../../../public/icons/bookmark-icon.svg";

type Props = {
  image: string;
  title: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  currency: string;
  className?: string;
  priceClassName?: string;
  imageClassName?: string;
  providerPhoto?: string;
};

const EventCard = ({
  image,
  title,
  price,
  currency,
  oldPrice,
  discount,
  className = "",
  priceClassName = "",
  imageClassName = "",
  providerPhoto = "",
}: Props) => {
  return (
    <div
      className={`w-50 h-57.5 lg:w-full lg:h-full overflow-hidden rounded-2xl bg-white p-4 max-md:aspect-square ${className}`}
    >
      <div
        className={`relative h-full w-full rounded-2xl mb-5.75 ${imageClassName}`}
      >
        {/* Event Image */}
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover rounded-2xl ${imageClassName}`}
        />

        {/* Bookmark Icon */}
        <Image
          src={bookmarkIcon}
          alt="Save"
          width={32}
          height={32}
          className="absolute top-1.5 right-1.5 md:top-4 md:right-4 h-6 w-6 cursor-pointer"
        />

        {/* User Photo */}
        <Image
          src={providerPhoto}
          alt="User"
          width={48}
          height={48}
          className="absolute bottom-2 right-2 md:bottom-4 md:right-4 max-md:h-9 max-md:w-9 rounded-sm md:rounded cursor-pointer"
        />
      </div>

      <div>
        <div className="text-right font-bold text-gray-900 max-md:text-[12px]">
          {title}
        </div>

        <div className="flex items-center justify-end gap-2.5">
          {discount && (
            <div className="bg-red-500 text-white pl-1 pr-3 pb-1.5 pt-2 max-h-max text-center text-[14px] [clip-path:polygon(0_23%,0_80%,59%_81%,88%_54%,60%_24%)]">
              {discount}
            </div>
          )}
          <div className="flex items-center md:gap-1 md:mt-1 flex-col">
            <div
              dir="ltr"
              className={`flex items-center gap-1 text-black text-[14px] ${priceClassName}`}
            >
              <span>{currency}</span>
              <span>{price}</span>
            </div>
            {oldPrice && (
              <div
                dir="ltr"
                className="flex items-center gap-1 text-[#716E6E] text-[12px] line-through font-light!"
              >
                <span>{currency}</span>
                <p>{oldPrice}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
