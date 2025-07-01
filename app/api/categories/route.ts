import { categories } from "@/lib/dummy-data";
import { generateId } from "@/lib/paginateArray";
import { Category } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    // Add a small delay to simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 300));

    return NextResponse.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, slug, image } = body;

    // Validate required fields
    if (!name || !slug || !image) {
      return NextResponse.json(
        { error: "Name, slug, and image are required" },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const existingCategory = categories.find((cat) => cat.slug === slug);
    if (existingCategory) {
      return NextResponse.json(
        { error: "A category with this slug already exists" },
        { status: 409 }
      );
    }

    // Create new category
    const newCategory: Category = {
      id: generateId("cat"),
      name,
      slug,
      image,
    };

    categories.push(newCategory);

    // Add a small delay to simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json(
      { error: "Failed to create category" },
      { status: 500 }
    );
  }
}
