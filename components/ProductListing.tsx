"use client";

import { getProducts } from "@/actions/data";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ProductCard } from "./product-card";

export function ProductListing() {
  const { ref, inView } = useInView();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam }) => getProducts(pageParam),
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

  if (isLoading) {
    return (
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 rounded-lg h-64 mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Products</h2>
        <div className="text-center py-12">
          <p className="text-red-600">
            Error loading products: {error.message}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

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
            You've reached the end of our product catalog!
          </p>
        </div>
      )}

      {/* Empty state */}
      {products.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No products found.</p>
        </div>
      )}
    </section>
  );
}
