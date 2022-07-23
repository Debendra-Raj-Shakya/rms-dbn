import { createContext, useContext, useState } from "react";
import {v4 as uuidv4} from "uuid"
 const ProductContext = createContext(undefined);
const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState([]);
  const [modal, setModal] = useState(false);
  const addProduct = (product) => {
    const id=uuidv4();
    product.id=id;
    setProduct([...products, product]);
    // setModal(false);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

export const useProduct = () => useContext(ProductContext);
