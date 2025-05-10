import axios from "axios";
import { useState } from "react";

export interface ProductData {
  name: string;
  price: string;
  description?: string;
  image_url?: string;
}

export const useSubmitProduct = () => {
  const [loading, setLoading] = useState(false);

  const submitProduct = async (productData: ProductData) => {
    setLoading(true);

    try {
      const res = await axios.post(
        `http://localhost:3001/api/products`,
        productData
      );

      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    submitProduct,
    loading,
  };
};
