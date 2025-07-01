import { CategoriesTable } from "@/components/categories-table"
import categoriesData from "../data/categories.json"

export default function CategoriesPage() {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-6 md:p-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight">Categories</h1>
        <p className="text-muted-foreground">Manage your product categories and organize your inventory.</p>
      </div>
      <CategoriesTable data={categoriesData} />
    </div>
  )
}
