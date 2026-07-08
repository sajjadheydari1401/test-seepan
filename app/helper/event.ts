import { Event } from "../types/event";

export function transformEventToCardProps(event: Event) {
  const basePrice = Math.floor(Math.random() * 500000) + 100000;
  const discount = Math.floor(Math.random() * 30) + 10;
  const discountedPrice = Math.floor(basePrice * (1 - discount / 100));

  return {
    image: event.coverMediaUrl || "/images/default-event.png",
    title: event.title || "بدون عنوان",
    price: discountedPrice.toLocaleString("fa-IR"),
    oldPrice: basePrice.toLocaleString("fa-IR"),
    discount: `${discount}%`,
    currency: "تومان",
  };
}
