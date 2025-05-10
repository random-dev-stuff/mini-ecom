"use client";

import { useEffect, useState } from "react";
import { ProductData } from "./use-submit-product";
import axios from "axios";

export const useGetProduct = (searchQuery?: string) => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:3001/api/product", {
        params: { search: searchQuery },
      });
      setProducts(res.data);
    } catch (err) {
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [searchQuery]);

  return { products, loading, error };
};
