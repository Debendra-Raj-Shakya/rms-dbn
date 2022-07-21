import React from 'react'

const Orders = ({orders}) => {
  return (
    <div className="h-[500px]">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orders && orders.map(({id,name,price,quantity})=>(
              <tr key={id}>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr />
        <div className="flex justify-between px-5">
          <div>Total</div>
          <div>2000</div>
        </div>
        <hr />
      </div>
  )
}

export default Orders