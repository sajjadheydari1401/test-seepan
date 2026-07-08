import { NextResponse } from "next/server";

const API_BASE_URL = process.env.API_BASE_URL || "";

export async function GET() {
  try {
    const response = await fetch(
      `${API_BASE_URL}/landing/experience-categories/with-experiences`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: `API error: ${response.status}` },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Proxy error:", error);
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 },
    );
  }
}
