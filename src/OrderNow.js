// OrderNow.js
//import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Cart from "./components/cart/Cart";
import Delivery from "./components/cart/Delivery";
import Login from "./components/user/Login";
import "./Tap.css";

const OrderNow = () => {
  return (
     <div className="App">
      <Header />
      <div className="container container-fluid">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/eats/stores/:id/menus/" element={<Menu />} exact />
          <Route path="/cart" element={<Cart />} exact />
          <Route path="/delivery" element={<Delivery />} exact />
          <Route path="/users/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
   
  );
};

export default OrderNow;
