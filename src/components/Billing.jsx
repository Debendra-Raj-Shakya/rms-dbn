import React, { useState } from "react";
import { Desks } from "./Desks";

const Billing = () => {
  const desks = {
    1: {
      orders: [
        {id:1,name:'pizza',quantity:12,price:200},
        {id:2,name:'burger',quantity:12,price:200},
        {id:3,name:'pizza',quantity:12,price:200},
        {id:4,name:'burger',quantity:12,price:200},
      ],
    },
    2: { 
      orders: [
        {id:1,name:'pizza',quantity:12,price:200},
        {id:2,name:'burger',quantity:12,price:200},
        {id:3,name:'pizza',quantity:12,price:200},
        {id:4,name:'burger',quantity:12,price:200},
        {id:5,name:'pizza',quantity:12,price:200},
        {id:6,name:'burger',quantity:12,price:200},
        {id:7,name:'pizza',quantity:12,price:200},
        {id:8,name:'burger',quantity:12,price:200},
      ] },
  };
  const [activeState,setActiveState]=useState(1)

  const changeState=(index)=>{
    setActiveState(index)
  }
  const getIndexes=(()=>{
    return Object.keys(desks)
  })()
  return (
    <div>
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
            {desks[activeState].orders && desks[activeState].orders.map(({id,name,price,quantity})=>(
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
      <hr />
      <div className="h-[500px] p-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-start  flex-wrap">
        <Desks indexes={getIndexes} activeIndex={activeState} setIndex={changeState}/>
      </div>
    </div>
  );
};

export default Billing;
