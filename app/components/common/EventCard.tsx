import Image from "next/image";
import bookmarkIcon from "../../../public/icons/bookmark-icon.svg";
import userPhoto from "../../../public/images/user-photo.png";

type Props = {
  image: string;
  title: string;
  price: string;
  currency: string;
  className?: string;
  imageClassName?: string;
};

const EventCard = ({
  image,
  title,
  price,
  currency,
  className = "",
  imageClassName = "",
}: Props) => {
  return (
    <div
      className={`w-50 h-57.5 lg:w-full lg:h-full overflow-hidden rounded-2xl bg-white p-4 ${className}`}
    >
      <div
        className={`relative h-full w-full rounded-b-2xl mb-5.75 ${imageClassName}`}
      >
        {/* Event Image */}
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover rounded-b-2xl ${imageClassName}`}
        />

        {/* Bookmark Icon */}
        <Image
          src={bookmarkIcon}
          alt="Save"
          width={32}
          height={32}
          className="absolute top-1.5 right-1.5 md:top-4 md:right-4 h-6 w-6 max-md:h-4.5 max-md:w-4.5 cursor-pointer"
        />

        {/* User Photo */}
        <Image
          src={userPhoto}
          alt="User"
          width={48}
          height={48}
          className="absolute bottom-2 right-2 md:bottom-4 md:right-4 max-md:h-6 max-md:w-6 rounded-sm md:rounded cursor-pointer"
        />
      </div>

      <div>
        <div className="text-right font-bold text-gray-900 max-md:text-[12px]">
          {title}
        </div>

        <div className="flex items-center justify-end md:gap-1 text-[#1E1E1E] text-[12px] max-md:text-[10px]">
          <span>{currency}</span>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
