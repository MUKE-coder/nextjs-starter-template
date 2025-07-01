import { products } from "@/lib/dummy-data";
import { paginateArray } from "@/lib/paginateArray";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const cursor = searchParams.get("cursor") || undefined;
    const limit = parseInt(searchParams.get("limit") || "10");
    const categoryId = searchParams.get("categoryId") || undefined;
    const search = searchParams.get("search") || undefined;

    let filteredProducts = [...products];

    // Filter by category if provided
    if (categoryId) {
      filteredProducts = filteredProducts.filter(
        (product) => product.categoryId === categoryId
      );
    }

    // Filter by search term if provided
    if (search) {
      const searchLower = search.toLowerCase();
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower)
      );
    }

    // Paginate results
    const paginatedData = paginateArray(filteredProducts, cursor, limit);

    // Add a small delay to simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 400));

    return NextResponse.json(paginatedData);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
