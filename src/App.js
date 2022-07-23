import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductProvider from "./components/context/Product";
import Navbar from "./components/Layout/Navbar";
import HomePage from "./pages/homePage";
import Product from "./pages/products";

function App() {
  return (
    <div className="App">
      <ProductProvider>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
      </ProductProvider>
    </div>
  );
}

export default App;
