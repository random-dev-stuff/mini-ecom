import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  price: z.string().min(1, "Price must be greater than 0"),
  description: z.string().min(1, "Description is required"),
  image_url: z.string().optional(),
});

export type ProductData = z.infer<typeof productSchema>;
