import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css"; // Make sure to include your CSS file
import logo from "./logo.png"; // Make sure to provide the correct path to your logo image

const LandingPage = () => {
  return (
    <div className="landingcontainer">
      <nav className="firstpage row sticky-top">
        <Link to="/" className="navlink">
         <h1 >
          <a>HOME</a>
        </h1>
        </Link>
       
        <Link to="/services" className="navlink">
        <h1 >
          <a>SERVICES</a>
        </h1>
        </Link>
        
        <Link to="/order-now" className="navlink">
          <h1>
            <a>ORDER NOW</a>
          </h1>
        </Link>
        <Link to="/contact" className="navlink">
        <h1 >
          <a href="#">CONTACT US</a>
        </h1>
        </Link>
        
      </nav>
      <div className="landingcontent">
        <div className="logodiv">
          
          <img src={logo} alt="Logoo" className="logooo" />
          <div className="textcontainer">
           <h1>THE</h1>
          <h1>FASTEST</h1> 
          <h1>FOOD</h1>
          <h1>DELIVERY</h1>
          </div>
          
        </div>
       
      </div>
    </div>
  );
};


export default LandingPage;