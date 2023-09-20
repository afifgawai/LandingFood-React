import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className="landingcontainer">
    <nav className="firstpage row sticky-top">
      <Link to="/" className="navlink">
        <h1>
          <a href="#">HOME</a>
        </h1>
      </Link>

      <Link to="/services" className="navlink">
        <h1>
          <a href="#">SERVICES</a>
        </h1>
      </Link>

      <Link to="/order-now" className="navlink">
        <h1>
          <a>ORDER NOW</a>
        </h1>
      </Link>
      <Link to="/contact" className="navlink">
        <h1>
          <a href="#">CONTACT US</a>
        </h1>
      </Link>
    </nav>
    <div className="landingcontent">
      <div className="logodiv">
        <div className="services-container">
          <h1>CONTACT US:</h1>
          <div className="services-text">
            <h3>
            Phone no: 90080 90080
            </h3>
            <h3>
            Email: contact@dronewala.com
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact
