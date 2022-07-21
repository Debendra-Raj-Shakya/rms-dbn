import React from 'react'
import Order from './Order'

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
            {orders && orders.map((order)=>(
             <Order order={order}/>
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