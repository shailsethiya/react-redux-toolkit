import React from "react";
import { Image } from "react-bootstrap";

export function ProductCard() {
  return (
    <div className="grid">
      <div className="grid-12">
        <Image
          src="assets/images/item1.jpg"
          height={200}
          width={200}
          className="rounded"
        />
      </div>
      <div className="grid-12">
        <p className="h4">Title</p>
        <p className="h6">Long Description here</p>
      </div>
    </div>
  );
}
