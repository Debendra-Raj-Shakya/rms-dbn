import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const products=   [{
    "id":1,
    "quantity":5,
    "name":"pizza",
    "price":120,
    "description":"pizza is good",
    "imageURL":"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
},
{
    "id":2,
    "quantity":5,
    "name":"pizza",
    "price":160,
    "description":"pizza is good",
    "imageURL":"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
},
{
    "id":3,
    "quantity":5,
    "name":"pizza",
    "price":180,
    "description":"pizza is good",
    "imageURL":"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
}]
  return (
    <div className="col-span-2 flex flex-wrap">
      {products.map((product)=>(
        <ProductCard product={product}/>

      ))}
     
    </div>
  );
};

export default ProductList;
