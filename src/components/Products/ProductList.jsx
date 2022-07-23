import React from "react";
import { useProduct } from "../../context/Product";
import ProductCard from "./ProductCard";

const ProductList = () => {
const {products}=useProduct()
  return (
    <div className="col-span-2 flex flex-wrap">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
