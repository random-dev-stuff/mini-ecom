"use client";

import { ProductModal } from "@/components/product-modal";

export default function SubmitPage() {
  return (
    <div className="p-4">
      <ProductModal isOpen={true} />
    </div>
  );
}
