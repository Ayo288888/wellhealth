import React from "react";
import "./Services-Page.css"; // We will create this CSS file
import location from "../assets/image/location.png";
function ServicesPage() {
  return (
    <div className="services-page">
      <section id="services-intro" className="services-intro">
        <h2>Our Services</h2>
        <p>
          At Wellhealth Services, we offer a wide range of services to support
          your housing needs. Our team is dedicated to providing expert guidance
          and resources to help you find your new home.
        </p>
      </section>

      <section id="expert-guidance" className="expert-guidance">
        <h2>Expert Guidance</h2>
        <div className="guidance-grid">
          <div className="guidance-card">
            <img src={location} alt="Guidance Icon" />
            <h3>Personalized Support</h3>
            <p>
              Our team provides personalized support to help you navigate the
              housing market and find the perfect home.
            </p>
          </div>
          <div className="guidance-card">
            <img src={location} alt="Guidance Icon" />
            <h3>Financial Assistance</h3>
            <p>
              We offer financial assistance programs to help you secure housing
              without financial strain.
            </p>
          </div>
          <div className="guidance-card">
            <img src={location} alt="Guidance Icon" />
            <h3>Community Collaboration</h3>
            <p>
              We work with local communities to provide you with the best
              housing options available.
            </p>
          </div>
        </div>
      </section>

      <section id="statistics" className="statistics">
        <h2>Our Impact</h2>
        <div className="statistics-grid">
          <div className="stat-card">
            <h3>7.4%</h3>
            <p>House Stabilization</p>
          </div>
          <div className="stat-card">
            <h3>3,856</h3>
            <p>Homes Supported</p>
          </div>
          <div className="stat-card">
            <h3>2,540</h3>
            <p>Families Helped</p>
          </div>
        </div>
      </section>
      <section id="services-intro" className="services-intro">
        <h2>Referral</h2>
        <p>
          At Wellhealth Services, we offer a wide range of services to support
          your housing needs. In other to apply please click on the
          <a href="dd"> Link</a>
          <br />
          and submit your form to: Info@wellhealthservices.org
        </p>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Wellhealth</h3>
            <p>
              Address: 123 Main Street, Anytown, USA
              <br />
              Phone: (555) 123-4567
              <br />
              Email: wellhealthservices@gmail.com
              <br />
              Website:{" "}
              <a href="http://www.wellhealthservices.com">
                www.wellhealthservices.com
              </a>
            </p>
          </div>
          <div className="footer-nav">
            <h3>Navigate</h3>
            <nav>
              <a href="/">Home</a>
              <a href="/about-us">About Us</a>
              <a href="services">Services</a>
              <a href="referral">Referrals</a>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 NexTrix. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default ServicesPage;
