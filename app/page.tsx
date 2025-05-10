"use client";

import { SearchBar } from "@/components/search-bar";
import Link from "next/link";
import { useState } from "react";
import { useGetProduct } from "@/hooks/use-get-product";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const { products, loading, error } = useGetProduct(searchQuery);

  const displayedProducts =
    searchQuery.trim() === "" ? products.slice(0, 3) : products;

  return (
    <div className="min-h-screen p-4 flex flex-col items-center">
      <SearchBar onSearch={setSearchQuery} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full max-w-6xl">
        {loading && (
          <p className="col-span-full text-center text-gray-500">Loading...</p>
        )}

        {error && (
          <p className="col-span-full text-center text-red-500">{error}</p>
        )}

        {!loading && !error && displayedProducts.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}

        {displayedProducts.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <p className="text-sm text-gray-500">{product.description}</p>
          </div>
        ))}
      </div>

      <div className="flex space-x-4 mt-10">
        <Link
          href="/submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit Product
        </Link>
        <Link
          href="/products"
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
        >
          View My Products
        </Link>
      </div>
    </div>
  );
}
