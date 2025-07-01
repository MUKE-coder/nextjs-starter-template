"use client";

import Link from "next/link";

import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "./custom-ui/ui/button";
import { Product } from "@/types/types";

interface ProductCardProps {
  product: Product;
  showCategory?: boolean;
}

export function ProductCard({
  product,
  showCategory = false,
}: ProductCardProps) {
  return (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-48 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://via.placeholder.com/400x300?text=Product";
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />

          {/* Quick actions overlay */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
              <Heart className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-green-600">
            ${product.price.toFixed(2)}
          </span>

          <Button
            size="sm"
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              // Add to cart logic here
            }}
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </Button>
        </div>

        {showCategory && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <Link
              href={`/categories/${product.categoryId}`}
              className="text-xs text-blue-600 hover:text-blue-800 transition-colors"
            >
              View Category →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
