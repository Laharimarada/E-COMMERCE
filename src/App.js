import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Mens from "./Components/Mens";
import Kids from "./Components/Kids";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import { shopContext } from "./Context/shopContext";
import { useState } from "react";
import ProductView from "./Pages/ProductView";
function App() {
  const [cart, setCart] = useState([]);
  const [preview, setPreview] = useState({
    id: "",
    name: "",
    image: "",
    price: "",
  });
  const removeItem = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  };
  return (
    <div>
      <BrowserRouter>
        <shopContext.Provider
          value={{ cart, setCart, removeItem, preview, setPreview }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/mens" element={<Mens />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/product" element={<Product />} />
            <Route path="/:productId" element={<ProductView />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </shopContext.Provider>
      </BrowserRouter>
    </div>
  );
}
export default App;
