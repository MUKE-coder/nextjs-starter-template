import { products } from "@/lib/dummy-data";
import { paginateArray } from "@/lib/paginateArray";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ categoryId: string }> }
) {
  try {
    const { categoryId } = await params;
    const { searchParams } = new URL(request.url);
    const cursor = searchParams.get("cursor") || undefined;
    const limit = parseInt(searchParams.get("limit") || "10");

    // Filter products by category
    const categoryProducts = products.filter(
      (product) => product.categoryId === categoryId
    );

    if (categoryProducts.length === 0) {
      return NextResponse.json({
        data: [],
        hasMore: false,
        total: 0,
      });
    }

    // Paginate results
    const paginatedData = paginateArray(categoryProducts, cursor, limit);

    // Add a small delay to simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 300));

    return NextResponse.json(paginatedData);
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return NextResponse.json(
      { error: "Failed to fetch products by category" },
      { status: 500 }
    );
  }
}
