import { PopularEvent, PopularEventCardProps } from "../types/popular";
import userPhoto from "../../public/images/user-photo.png";

export function transformPopularEventToCardProps(
  event: PopularEvent,
): PopularEventCardProps {
  const basePrice = Math.floor(Math.random() * 500000) + 200000;
  let finalPrice = basePrice;
  let discount = "";
  let oldPrice = "";

  if (event.offer && event.offer.length > 0) {
    const offer = event.offer[0];
    if (offer.type === "Percent") {
      const discountAmount = Math.floor(basePrice * (offer.value / 100));
      finalPrice = Math.max(basePrice - discountAmount, 0);
      discount = `${offer.value}%`;
      oldPrice = basePrice.toLocaleString("fa-IR");
    }
  }

  return {
    id: event.publicId,
    image: event.coverMediaUrl || "/images/default-event.png",
    title: event.title || "بدون عنوان",
    price: finalPrice.toLocaleString("fa-IR"),
    currency: "تومان",
    discount: discount || undefined,
    oldPrice: oldPrice || undefined,
    providerPhoto: event.userInfo.avatarUrl || userPhoto.src,
  };
}
