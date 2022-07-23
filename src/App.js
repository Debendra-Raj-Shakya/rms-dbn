import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductProvider from "./context/Product";
import Navbar from "./components/Layout/Navbar";
import HomePage from "./pages/homePage";
import Product from "./pages/products";
import BillingProvider from "./context/Billing";
import ToastProvider from "./context/Toast";

function App() {
  return (
    <div className="App">
      <ToastProvider>

      <ProductProvider>
        <BillingProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product" element={<Product />} />
            </Routes>
          </BrowserRouter>
        </BillingProvider>
      </ProductProvider>
      </ToastProvider>
    </div>
  );
}

export default App;
