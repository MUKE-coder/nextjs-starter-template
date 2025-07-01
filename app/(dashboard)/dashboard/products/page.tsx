import { ProductsTable } from "@/components/products-table"
import productsData from "../data/products.json"

export default function ProductsPage() {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-6 md:p-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight">Products</h1>
        <p className="text-muted-foreground">Manage your product catalog, pricing, and inventory.</p>
      </div>
      <ProductsTable data={productsData} />
    </div>
  )
}
