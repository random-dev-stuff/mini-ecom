"use client";

import { ProductData } from "@/hooks/use-submit-product";
import { FC } from "react";

interface ProductCardProps {
  product: ProductData;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition w-full p-4">
      <div className="w-full h-48 md:h-56 lg:h-64 overflow-hidden">
        <img
          src={
            product.image_url &&
            (product.image_url.startsWith("http") ||
              product.image_url.startsWith("data:image"))
              ? product.image_url
              : "/default-product.png"
          }
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        <div className="text-blue-600 font-semibold text-lg">
          ${Number(product.price).toFixed(2)}
        </div>
      </div>
    </div>
  );
};
