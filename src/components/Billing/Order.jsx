import React from 'react'

const Order = ({order:{id,name,quantity,price}}) => {
  return (
    <tr key={id}>
    <td>{name}</td>
    <td>{quantity}</td>
    <td>{price}</td>
  </tr>
  )
}

export default Order