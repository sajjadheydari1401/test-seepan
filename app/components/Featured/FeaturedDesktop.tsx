import Image from "next/image";
import EventCard from "../common/EventCard";
import { PopularEventCardProps } from "@/app/types/popular";
import FeaturedBg from "../../../public/images/featured-section-bg.svg";

type FeaturedDesktopProps = {
  featuredCard: PopularEventCardProps | null;
  gridCards: PopularEventCardProps[];
};

export const FeaturedDesktop = ({
  featuredCard,
  gridCards,
}: FeaturedDesktopProps) => {
  return (
    <div className="relative max-w-360 max-h-218.25 mx-auto mt-8 hidden md:block">
      {featuredCard && (
        <EventCard
          {...featuredCard}
          className="absolute top-0 right-0 max-w-94 max-h-115"
          imageClassName="max-h-86"
        />
      )}

      <Image
        src={FeaturedBg}
        alt="featured background"
        width={1440}
        height={873}
        className="w-full h-full object-cover"
      />

      <div className="absolute md:bottom-0 left-0 gap-8 w-full max-w-234.25 md:h-89.5 flex">
        {gridCards.map((card) => (
          <EventCard
            key={card.id}
            {...card}
            className="max-h-89.5 max-w-360"
            imageClassName="max-h-[240px]"
          />
        ))}
      </div>
    </div>
  );
};
