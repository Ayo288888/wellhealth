import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Assuming this is the CSS file you provided
import Headerlogo from "../assets/image/headerlogo.png";

const Navbar = () => {
  return (
    <header className="header">
      <div className="logoWrapper">
        <img src={Headerlogo} alt="Logo" className="logo" />
      </div>
      <nav className="navigation">
        <Link to="/" className="navLink">
          Home
        </Link>
        <Link to="/about-us" className="navLink">
          About Us
        </Link>
        <Link to="/services" className="navLink">
          Services
        </Link>
        <Link to="/referral" className="navlink">
          Referral
        </Link>
        <Link to="/contact" className="navLink navButton">
          Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
