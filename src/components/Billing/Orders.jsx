import React from "react";
import { useBilling } from "../../context/Billing";
import Order from "./Order";

const Orders = () => {
  const {getActiveOrder:orders}=useBilling()
  const getTotalAmount = () => {
    return orders.reduce((x, y) => {
      return x = x + y.price * y.quantity;
    }, 0);
  };
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
          {orders && orders.map((order) => <Order key= {order.id}order={order} />)}
        </tbody>
      </table>
      <hr />
      <div className="flex justify-between px-5">
        <div>Total</div>
        <div>{getTotalAmount()}</div>
      </div>
      <hr />
    </div>
  );
};

export default Orders;
