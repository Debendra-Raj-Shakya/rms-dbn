import React, { useState } from "react";
import AddProduct from "../components/Inventory/AddProduct";
import ProductRow from "../components/Inventory/ProductRow";

const Product = () => {
  // const products = [
  //   {
  //     id: 1,
  //     quantity: 5,
  //     name: "pizza",
  //     price: 120,
  //     description: "pizza is good",
  //     imageURL:
  //       "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  //   },
  //   {
  //     id: 2,
  //     quantity: 5,
  //     name: "pizza",
  //     price: 160,
  //     description: "pizza is good",
  //     imageURL:
  //       "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  //   },
  //   {
  //     id: 3,
  //     quantity: 5,
  //     name: "pizza",
  //     price: 180,
  //     description: "pizza is good",
  //     imageURL:
  //       "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  //   },
  // ];
  const [products,setProduct]=useState([])
  const [modal,setModal]=useState(false)
  const addProduct=(product)=>{
    setProduct([...products,product])
    setModal(false)

  }
  return (
    <div className="h-screen w-screen ">
      {/* <!-- The button to open modal --> */}

    
        {/* <label htmlFor="add_product-modal" className="btn modal-button">
          Add Product in store
        </label> */}

        <input type="checkbox" checked={ modal} id="add_product-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
          <button onClick={()=>setModal(false)} className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
            <AddProduct addProduct={addProduct}/>
            <div className="modal-action">
              {/* <label htmlFor="add_product-modal" className="btn">
                Add Product in store
              </label> */}
            </div>
          </div>
        </div>
        <div className="flex justify-end mx-10 my-6">
        <button onClick={()=>setModal(true)} className="btn btn-primary">add products</button>

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
            {products.map((product) => {
              return <ProductRow key={product.id} product={product} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
