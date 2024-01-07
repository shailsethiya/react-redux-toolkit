import React from "react";

import { ProductCard } from "../../components/card/product/ProductCard";

export default function Products() {
  return (
    <div>
      <p className="h3">Products</p>
      <ProductCard />
      <ProductCard />
    </div>
  );
}
