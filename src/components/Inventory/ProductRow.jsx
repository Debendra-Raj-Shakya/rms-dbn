import React, { useState } from "react";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";

const ProductRow = ({
  product: { id, imageURL, quantity, description, name, price },
}) => {
  const [modal,setModal]=useState(false)
  return (
    <tr key={id}>
      <th>{id}</th>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>
        <img src={imageURL} alt={name} height={80} width={80} />
      </td>
      <td>
      <input type="checkbox" onChange={()=>setModal(true)} checked={ modal} id="add_product-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
          <button onClick={()=>setModal(false)} className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
            <UpdateProduct id={id}/>
            <div className="modal-action">
              {/* <label htmlFor="add_product-modal" className="btn">
                Add Product in store
              </label> */}
            </div>
          </div>
        </div>
        <div className="flex justify-end mx-10 my-6">
        <button onClick={()=>setModal(true)} className="btn btn-primary">edit</button>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
