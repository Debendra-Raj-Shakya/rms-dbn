import React from "react";

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
      {products.map(({id,quantity,name,price,imageURL,description})=>(
      <div key={id}className="card w-96 bg-base-100 shadow-xl h-[28rem]">
        <figure className="px-10 pt-10">
          <img
            src={imageURL}
            alt={name}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now/Order {price}</button>
          </div>
        </div>
      </div>

      ))}
     
    </div>
  );
};

export default ProductList;
