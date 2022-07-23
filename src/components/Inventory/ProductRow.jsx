import React from "react";

const ProductRow = ({
  product: { id, imageURL, quantity, description, name, price },
}) => {
  return (
    <tr key={id}>
      <th>{id}</th>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>
        <img src={imageURL} alt={name} height={80} width={80} />
      </td>
    </tr>
  );
};

export default ProductRow;
