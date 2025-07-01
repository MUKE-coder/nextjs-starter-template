import ProductDetail from "@/components/product-detail";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  return (
    <div>
      <ProductDetail productId={productId} />
    </div>
  );
}
