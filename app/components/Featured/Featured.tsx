import { transformPopularEventToCardProps } from "@/app/helper/popular";
import { fetchPopularEvents } from "@/app/services/popular";
import { PopularEventCardProps } from "@/app/types/popular";
import { FeaturedDesktop } from "./FeaturedDesktop";
import { SectionHeader } from "../common/SectionHeader";
import { FeaturedMobile } from "./FeaturedMobile";
import { ErrorDisplay } from "../common/ErrorDisplay";
import { EmptyState } from "../common/EmptyState";

export const dynamic = "force-dynamic";

export default async function Featured() {
  let eventCards: PopularEventCardProps[] = [];
  let error: Error | null = null;

  try {
    const response = await fetchPopularEvents();
    eventCards = response.data.map(transformPopularEventToCardProps);

    if (!eventCards || eventCards.length === 0) {
      console.warn("No popular events returned from API");
    }

    console.log(`Loaded ${eventCards.length} popular events from API`);
  } catch (err) {
    console.error("Failed to fetch popular events:", err);
    error = err as Error;
    eventCards = [];
  }

  const featuredCard = eventCards[0] || null;
  const gridCards = eventCards.slice(1, 4) || [];

  // Error state
  if (error) {
    return (
      <div className="relative max-md:bottom-40 px-5 md:px-0">
        <SectionHeader />
        <ErrorDisplay message="خطا در بارگذاری رویدادهای منتخب" />
      </div>
    );
  }

  // Empty state
  if (!eventCards || eventCards.length === 0) {
    return (
      <div className="relative max-md:bottom-40 px-5 md:px-0">
        <SectionHeader />
        <EmptyState message="هیچ رویداد منتخبی یافت نشد" />
      </div>
    );
  }

  return (
    <div className="relative max-md:bottom-40 px-5 md:px-0">
      <SectionHeader />
      <FeaturedDesktop featuredCard={featuredCard} gridCards={gridCards} />
      <FeaturedMobile cards={eventCards} />
    </div>
  );
}
