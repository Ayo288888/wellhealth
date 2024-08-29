import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import headerlogo from "../assets/image/headerlogo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <img
          src={headerlogo}
          alt="WellHealth Services Logo"
          className={styles.logo}
        />
      </div>
      <nav className={styles.navigation}>
        <a href="#home" className={styles.navLink}>
          Home
        </a>
        <Link to="/about-us" className={styles.navLink}>
          About Us
        </Link>
        <a href="#services" className={styles.navLink}>
          Services
        </a>
        <a href="#referral" className={styles.navLink}>
          Referral
        </a>
        <a href="Footer" className={styles.navButton}>
          Contact Us
        </a>
      </nav>
    </header>
  );
};

export default Header;
