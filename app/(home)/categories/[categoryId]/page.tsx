import CategoryDetail from "@/components/category-detail";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  const { categoryId } = await params;
  return (
    <div>
      <CategoryDetail categoryId={categoryId} />
    </div>
  );
}
