import { useEffect, useState } from "react";
import axios from "axios";
import { ProductData } from "./use-submit-product";

export const useGetProducts = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/all-products");
        setProducts(res.data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch products");
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};
