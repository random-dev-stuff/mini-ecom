"use client";

import { useGetProducts } from "@/hooks/use-get-products";
import { ProductCard } from "@/components/product-card";

export default function ProductsPage() {
  const { products, loading, error } = useGetProducts();

  if (loading) return <p className="text-center py-8">Loading products...</p>;
  if (error) return <p className="text-center text-red-600 py-8">{error}</p>;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 md:p-8">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
