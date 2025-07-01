import { CategoryListing } from "@/components/CategoryListing";
import { ProductListing } from "@/components/ProductListing";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl font-bold text-gray-900">E-Commerce Store</h1>
          <p className="text-gray-600 mt-2">
            Discover amazing products across various categories
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CategoryListing />
        <ProductListing />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-600">
            © 2025 E-Commerce Store. Built with Next.js and React Query.
          </p>
        </div>
      </footer>
    </div>
  );
}
