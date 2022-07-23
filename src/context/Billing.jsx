import React, { createContext, useContext, useState } from 'react'

const BillingContext=createContext(undefined)
const BillingProvider = ({children}) => {
    const desks = {
        1: {
          orders: [
           
          ],
        },
        2: {
          orders: [
           
          ],
        },
      };
      const [activeState, setActiveState] = useState("1");
      const getIndexes = (() => {
        return Object.keys(desks);
      })();
      const getActiveOrder=(()=>desks[activeState].orders)();
  return (
  <BillingContext.Provider value={
    {
        setActiveState,activeState,getIndexes,getActiveOrder
    }
  }>
{children}
  </BillingContext.Provider>
  )
}

export default BillingProvider
export const useBilling=()=>useContext(BillingContext)