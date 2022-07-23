import React, { createContext, useContext, useState } from "react";
import { useProduct } from "./Product";
import { v4 as uuidv4 } from "uuid";

const BillingContext = createContext(undefined);
const BillingProvider = ({ children }) => {
  const { products,updateQuantity } = useProduct();
  const [desks, setDesks] = useState({
    1: {
      orders: [],
    },
    2: {
      orders: [],
    },
  });
  const [activeState, setActiveState] = useState("1");
  const getIndexes = (() => {
    return Object.keys(desks);
  })();
  const getActiveOrder = (() => desks[activeState].orders)();

  const addOrder = (productId, quantity) => {
    const id = uuidv4();

    const selectedProduct = products.find((p) => p.id === productId);
    if(selectedProduct.quantity>= quantity){

      const newDesks = { ...desks };
      newDesks[activeState].orders.push({
        id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        quantity: quantity,
      });
      updateQuantity(productId,quantity)
      console.log(desks)
      setDesks(newDesks);
    }
  };
  return (
    <BillingContext.Provider
      value={{
        setActiveState,
        activeState,
        getIndexes,
        getActiveOrder,
        addOrder,
      }}
    >
      {children}
    </BillingContext.Provider>
  );
};

export default BillingProvider;
export const useBilling = () => useContext(BillingContext);
