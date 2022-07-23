import React from "react";
import ProductRow from "../components/Inventory/ProductRow";

const Product = () => {
  const products = [
    {
      id: 1,
      quantity: 5,
      name: "pizza",
      price: 120,
      description: "pizza is good",
      imageURL:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    },
    {
      id: 2,
      quantity: 5,
      name: "pizza",
      price: 160,
      description: "pizza is good",
      imageURL:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    },
    {
      id: 3,
      quantity: 5,
      name: "pizza",
      price: 180,
      description: "pizza is good",
      imageURL:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    },
  ];
  return (
    <div className="h-screen w-screen ">
      <div className="flex justify-end mx-10 my-6">
        <button className="btn btn-primary">add product</button>

      </div>
      <div className="overflow-x-hidden">
        <table className="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Image</th>

            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
         {products.map((product)=>{
          return (
            <ProductRow key={product.id} product={product}/>
          )
         })}
          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
