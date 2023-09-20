// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import OrderNow from './OrderNow';



import Menu from "./components/Menu";
import Cart from "./components/cart/Cart";
import Delivery from "./components/cart/Delivery";
import Login from "./components/user/Login";
import Services from './Services';
import Contact from './Contact';

function App() {
  return (
    <Router><div className="App">
      <Routes>
         <Route path="/LandingFood-React" element={<LandingPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/order-now/*" element={<OrderNow />} />
        
          <Route path="/eats/stores/:id/menus/" element={<Menu />} exact />
          <Route path="/cart" element={<Cart />} exact />
          <Route path="/delivery" element={<Delivery />} exact />
          <Route path="/users/login" element={<Login />} exact/>
          <Route path="/services" element={<Services/>} exact/>
          <Route path="/contact" element={<Contact/>}></Route>

      </Routes>
    </div>

    </Router>
    

  );
}

export default App;
