import { categories, products } from "@/lib/dummy-data";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Calculate statistics
    const totalCategories = categories.length;
    const totalProducts = products.length;

    // Products per category
    const productsPerCategory = categories.map((category) => ({
      categoryId: category.id,
      categoryName: category.name,
      productCount: products.filter(
        (product) => product.categoryId === category.id
      ).length,
    }));

    // Price statistics
    const prices = products.map((product) => product.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const avgPrice =
      prices.reduce((sum, price) => sum + price, 0) / prices.length;

    const stats = {
      totalCategories,
      totalProducts,
      productsPerCategory,
      priceStats: {
        min: minPrice,
        max: maxPrice,
        average: Math.round(avgPrice * 100) / 100,
      },
      lastUpdated: new Date().toISOString(),
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error("Error generating stats:", error);
    return NextResponse.json(
      { error: "Failed to generate statistics" },
      { status: 500 }
    );
  }
}
