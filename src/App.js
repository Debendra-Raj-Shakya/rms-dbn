import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import AddProduct from "./pages/addProduct";
import HomePage from "./pages/homePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addProduct" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
