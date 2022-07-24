import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const ProductContext = createContext(undefined);
const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState([]);
  const [modal, setModal] = useState(false);

  const addProduct = (product) => {
    const id = uuidv4();
    product.id = id;
    setProduct([...products, product]);
    // setModal(false);
  };
const updateProduct=(product)=>{

  console.log(products)
  const newProducts = [...products ];
  const updatedProduct = newProducts.find((p) => p.id == product.id);
  console.log(updatedProduct)
}
  

  const updateQuantity = (productId, quantity) => {
    const newProducts = [...products ];
    const updatedProduct = newProducts.find((p) => p.id === productId);
    updatedProduct.quantity = updatedProduct.quantity - quantity;
  };

  return (
    <ProductContext.Provider value={{ products, addProduct,updateQuantity }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

export const useProduct = () => useContext(ProductContext);
