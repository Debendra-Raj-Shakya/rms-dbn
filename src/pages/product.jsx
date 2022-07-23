import React from "react";
import { Formik, Form, Field } from "formik";
import AddProduct from "../components/Inventory/AddProduct";
const Product = () => {
  return (
    <div className="h-screen w-screen flex justify-center">
      <AddProduct/>
    </div>
  );
};

export default Product;
