import { HeroCarouselResponse } from "../types/event";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export async function fetchHeroCarousel(): Promise<HeroCarouselResponse> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/landing/experiences/hero-carousel`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: 60,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const result: HeroCarouselResponse = await response.json();

    if (!result.succeeded) {
      throw new Error(
        `API returned error: ${result.message?.messageEn || "Unknown error"}`,
      );
    }

    return result;
  } catch (error) {
    console.error("Error fetching hero carousel:", error);
    throw error;
  }
}
