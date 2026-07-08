import { PopularEventsResponse } from "../types/popular";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export async function fetchPopularEvents(): Promise<PopularEventsResponse> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/landing/experiences/popular`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const result: PopularEventsResponse = await response.json();

    if (!result.succeeded) {
      throw new Error(
        `API returned error: ${result.message?.messageEn || "Unknown error"}`,
      );
    }

    return result;
  } catch (error) {
    console.error("Error fetching popular events:", error);
    throw error;
  }
}
