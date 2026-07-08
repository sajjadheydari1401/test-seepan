import {
  CategoryWithExperiencesResponse,
  Category,
  CategoryEventCardProps,
} from "../types/category";

export async function fetchCategoryWithExperiences(): Promise<CategoryWithExperiencesResponse> {
  try {
    const response = await fetch("/api/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const result: CategoryWithExperiencesResponse = await response.json();

    if (!result.succeeded) {
      throw new Error(
        `API returned error: ${result.message?.messageEn || "Unknown error"}`,
      );
    }

    return result;
  } catch (error) {
    console.error("Error fetching category with experiences:", error);
    throw error;
  }
}

export function transformExperienceToCardProps(
  experience: Category,
): CategoryEventCardProps {
  // Calculate price with discount if offer exists
  let finalPrice = experience.basePrice;
  let discount = "";
  let oldPrice = "";

  if (experience.offer) {
    const offer = experience.offer;
    if (offer.type === "Percent") {
      const discountAmount = Math.floor(
        experience.basePrice * (offer.value / 100),
      );
      finalPrice = Math.max(experience.basePrice - discountAmount, 0);
      discount = `${offer.value}%`;
      oldPrice = experience.basePrice.toLocaleString("fa-IR");
    }
  }

  return {
    id: experience.publicId,
    image: experience.coverMediaUrl || "",
    title: experience.title || "بدون عنوان",
    price: finalPrice.toLocaleString("fa-IR"),
    currency: "تومان",
    discount: discount || undefined,
    oldPrice: oldPrice || undefined,
  };
}
