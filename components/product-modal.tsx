"use client";

import { X } from "lucide-react";
import { Input } from "./input";
import { ProductData, useSubmitProduct } from "../hooks/use-submit-product";
import { useState } from "react";
import { useToast } from "@/context/toast-context";
import { productSchema } from "@/validations/validator";
import { useRouter } from "next/navigation";

interface ModalProps {
  isOpen: boolean;
}
export const ProductModal = ({ isOpen }: ModalProps) => {
  const { submitProduct, loading } = useSubmitProduct();
  const toast = useToast();
  const router = useRouter();

  const [productData, setProductData] = useState<ProductData>({
    name: "",
    price: "",
    description: "",
    image_url: "",
  });

  const handleChange = (field: keyof ProductData, value: string) => {
    setProductData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = productSchema.safeParse(productData);

    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    try {
      await submitProduct(productData);
      console.log("Product Added", productData);
      router.push("/");
      toast.success("Product Added!");
    } catch (error) {
      toast.error("Failed to Add Product, Try Again");
      console.log(error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 p-6 md:p-8">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
        <button
          onClick={() => router.push("/")}
          className="absolute top-2 right-3 text-gray-400 hover:text-gray-800 text-lg font-bold"
        >
          <X className="hover:cursor-pointer" />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Submit Product
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            label="Product Name"
            type="text"
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <Input
            label="Price"
            type="text"
            onChange={(e) => handleChange("price", e.target.value)}
          />
          <Input
            label="Description"
            type="textarea"
            onChange={(e) => handleChange("description", e.target.value)}
          />
          <Input
            label="Image Url"
            type="text"
            onChange={(e) => handleChange("image_url", e.target.value)}
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full hover:cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
