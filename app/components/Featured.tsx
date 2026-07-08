import Image from "next/image";
import EventCard from "./common/EventCard";
import FeaturedBg from "../../public/images/featured-section-bg.svg";
import FeaturedBgMobile from "../../public/images/featured-section-mobile-bg.svg";
import { transformPopularEventToCardProps } from "../helper/popular";
import { fetchPopularEvents } from "../services/popular";
import { PopularEventCardProps } from "../types/popular";

export const dynamic = "force-dynamic";

export default async function Featured() {
  let eventCards: PopularEventCardProps[];

  try {
    const response = await fetchPopularEvents();

    eventCards = response.data.map(transformPopularEventToCardProps);

    if (!eventCards || eventCards.length === 0) {
      console.warn("No popular events returned from API, using fallback data");
    }

    console.log(`Loaded ${eventCards.length} popular events from API`);
  } catch (error) {
    console.error(
      "Failed to fetch popular events, using fallback data:",
      error,
    );
    eventCards = [];
  }

  const featuredCard = eventCards[0] || null;
  const gridCards = eventCards.slice(1, 4) || [];

  return (
    <div className="relative max-md:bottom-40 px-5 md:px-0">
      <p className="md:text-[32px] text-[#1E1E1E] text-center font-semibold md:font-bold">
        انتخاب کاربران
      </p>
      <p className="mt-2 text-[12px] md:text-[16px] text-[#716E6E] text-center">
        تجربه ‌هایی که حرف ندارن
      </p>

      {/* Desktop */}
      <div className="relative max-w-360 max-h-218.25 mx-auto mt-8 hidden md:block">
        {featuredCard && (
          <EventCard
            {...featuredCard}
            className="absolute top-0 right-0 max-w-94 max-h-115"
            imageClassName="max-h-86"
          />
        )}

        <div className="">
          <Image
            src={FeaturedBg}
            alt={"ft"}
            width={1440}
            height={873}
            className="w-full h-full object-cover"
          />
        </div>

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

      {/* Mobile */}
      <div className="md:hidden">
        <div className="relative h-38.5 w-full rounded-2xl max-md:mt-2.5">
          <Image
            src={FeaturedBgMobile}
            alt="ft"
            fill
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="flex flex-wrap gap-4 w-full mt-4">
          {eventCards.map((card) => (
            <EventCard
              key={card.id}
              {...card}
              className="xs:max-w-2/4 max-xs:w-full rounded-lg! px-2! pt-2! pb-0! h-65!"
              imageClassName="max-h-41.25 rounded-lg! mb-5!"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
