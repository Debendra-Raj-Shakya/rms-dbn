import { createContext, useContext, useState } from "react";

 const ProductContext = createContext(undefined);
const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState([]);
  const [modal, setModal] = useState(false);
  const addProduct = (product) => {
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
