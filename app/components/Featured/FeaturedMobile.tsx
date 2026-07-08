import Image from "next/image";
import FeaturedBgMobile from "../../../public/images/featured-section-mobile-bg.svg";
import { PopularEventCardProps } from "@/app/types/popular";
import EventCard from "../common/EventCard";

type FeaturedMobileProps = {
  cards: PopularEventCardProps[];
};

export const FeaturedMobile = ({ cards }: FeaturedMobileProps) => {
  return (
    <div className="md:hidden">
      <div className="relative h-38.5 w-full rounded-2xl max-md:mt-2.5">
        <Image
          src={FeaturedBgMobile}
          alt="featured mobile background"
          fill
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-wrap gap-4 w-full mt-4">
        {cards.map((card) => (
          <EventCard
            key={card.id}
            {...card}
            className="xs:max-w-2/4 max-xs:w-full rounded-lg! px-2! pt-2! pb-0! h-65!"
            imageClassName="max-h-41.25 rounded-lg! mb-5!"
          />
        ))}
      </div>
    </div>
  );
};
