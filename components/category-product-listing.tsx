"use client";

import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { ProductGrid } from "./product-grid";
import { getCategories, getProductsByCategory } from "@/actions/data";

interface CategoryProductListingProps {
  categoryId: string;
}

export function CategoryProductListing({
  categoryId,
}: CategoryProductListingProps) {
  const { ref, inView } = useInView();

  // Get category info
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const category = categories?.find((cat) => cat.id === categoryId);

  // Get products for this category with infinite scroll
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ["category-products", categoryId],
    queryFn: ({ pageParam }) => getProductsByCategory(categoryId, pageParam),
    getNextPageParam: (lastPage) => {
      return lastPage.hasMore ? lastPage.nextCursor : undefined;
    },
    initialPageParam: undefined as string | undefined,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  const products = data?.pages.flatMap((page) => page.data) ?? [];

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Error loading products: {error.message}</p>
      </div>
    );
  }

  return (
    <div>
      {/* Category Header */}
      {category && (
        <div className="mb-8">
          <div className="relative h-64 rounded-lg overflow-hidden mb-6">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "https://via.placeholder.com/1200x300?text=Category";
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
                <p className="text-xl opacity-90">
                  {data?.pages[0]?.total || 0} products available
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <ProductGrid products={products} isLoading={isLoading} />

      {/* Loading indicator */}
      {isFetchingNextPage && (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}

      {/* Intersection observer trigger */}
      {hasNextPage && (
        <div ref={ref} className="flex justify-center py-8">
          <div className="text-gray-500">Loading more products...</div>
        </div>
      )}

      {/* No more products */}
      {!hasNextPage && products.length > 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">
            You've seen all products in this category!
          </p>
        </div>
      )}

      {/* Empty state */}
      {!isLoading && products.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No products found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
