import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useProduct } from "./Product";

import {
  addOrder as addOrderService,
  checkOutOrder,
  getOrder,
  getSeat,
} from "../service/seat";
import { v4 as uuidv4 } from "uuid";
import { useToast } from "./Toast";
const BillingContext = createContext(undefined);
const BillingProvider = ({ children }) => {
  const { products, updateQuantity } = useProduct();
  const { addToast } = useToast();

  const [desks, setDesks] = useState([]);
  const [activeState, setActiveState] = useState();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const res = await getSeat();
        const array = res.data.sort((a, b) => a.label - b.label);
        setDesks(array); //eta chai label dine
        setActiveState(array[0]._id);
      } catch (err) {}
    };
    fetchSeats();
  }, []);

  useEffect(() => {
    if (activeState) {
      const fetchOrder = async () => {
        try {
          const res = await getOrder(activeState);
          setOrders(res.data); //data sanga gareko cha
        } catch (err) {
          console.log(err);
        }
      };
      fetchOrder();
    }
  }, [activeState]);
  // const getIndexes = (() => {
  //   return Object.keys(desks);
  // })();
  // const getActiveOrder = (() =>
  //   desks[activeState].find((order) => order.status === 0)
  //     ? desks[activeState].find((order) => order.status === 0).orders
  //     : undefined)();

  const addOrder = async (productId, quantity, seatId = activeState) => {
    const selectedProduct = products.find((p) => p._id === productId);
    if (selectedProduct.quantity >= quantity) {
      const newDesks = { ...desks };
      const res = await addOrderService(seatId, productId, quantity);
      const order = res.data;
      const newOrders = [...orders];
      newOrders.push(order);
      setOrders(newOrders);

      updateQuantity(productId, quantity);
      setDesks(newDesks);
    } else {
      addToast({ type: "error", message: "Out of order" });
    }
  };
  const checkOut = async () => {
    await checkOutOrder(activeState);
    setOrders([]);
  };
  return (
    <BillingContext.Provider
      value={{
        setActiveState,
        activeState,
        orders,
        addOrder,
        checkOut,
        desks,
      }}
    >
      {children}
    </BillingContext.Provider>
  );
};

export default BillingProvider;

export const useBilling = () => useContext(BillingContext);
