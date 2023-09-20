import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
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
            <h1>SERVICES:</h1>
            <div className="services-text">
              <h3>
                At DroneWala, we are on a mission to transform the way you
                experience food delivery. Our fleet of over 100 drones allows us
                to provide a seamless and futuristic dining experience. Imagine
                the convenience of having your favorite meals delivered to your
                doorstep by state-of-the-art drones, all while reducing our
                carbon footprint and contributing to a greener planet. Our
                commitment to sustainability is at the core of our service. By
                harnessing the power of drone technology, we've significantly
                reduced fuel consumption and energy usage, making each delivery
                not only faster but also environmentally responsible. Rain or
                shine, you can count on us to ensure your food arrives promptly,
                thanks to our reliable bike deliveries as a backup option. At
                DroneWala, we're not just delivering food; we're delivering a
                vision of the future. Join us on this exciting journey as we
                redefine food delivery, one eco-friendly flight at a time.
                Whether you're ordering a quick lunch or a special dinner, trust
                DroneWala to bring your favorite flavors right to your doorstep,
                effortlessly and sustainably. Experience the future of dining
                with us, where innovation meets culinary delight.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
