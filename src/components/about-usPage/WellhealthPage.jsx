import React from "react";
import "./WellHealthPage.css";
import project1 from "../assets/image/project1.jpg";
import project2 from "../assets/image/project2.jpg";
import project3 from "../assets/image/project3.jpg";
function WellHealthPage() {
  return (
    <div className="wellhealth-page">
      <section id="about-us" className="about-us">
        <div className="about-us-text">
          <h2>About Us</h2>
          <p>
            Wellhealth Services Housing Stabilization Services is dedicated to
            providing comprehensive support and resources to individuals and
            families at risk of homelessness or experiencing housing
            instability. Our mission is to ensure safe, affordable, and
            permanent housing solutions through personalized case management,
            financial assistance, and community collaboration.
          </p>
        </div>
        <div className="about-us-images">
          <img src={project1} alt="Project 1" />
          <img src={project2} alt="Project 2..." />
          <img src={project3} alt="Project 3..." />
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src={project1} alt="Project in NYC" />
            <div className="project-info">
              <h3>216</h3>
              <p>New York City, NY</p>
            </div>
          </div>
          <div className="project-card">
            <img src={project2} alt="Project in Houston" />
            <div className="project-info">
              <h3>141</h3>
              <p>Houston, TX</p>
            </div>
          </div>
          <div className="project-card">
            <img src={project3} alt="Project in San Diego" />
            <div className="project-info">
              <h3>212</h3>
              <p>San Diego, CA</p>
            </div>
          </div>
          <div className="project-card">
            <img src={project3} alt="Project in Philadelphia" />
            <div className="project-info">
              <h3>183</h3>
              <p>Philadelphia, PA</p>
            </div>
          </div>
          <div className="project-card">
            <img src={project3} alt="Project in San Francisco" />
            <div className="project-info">
              <h3>112</h3>
              <p>San Francisco, CA</p>
            </div>
          </div>
          <div className="project-card">
            <img src={project3} alt="Project in Miami" />
            <div className="project-info">
              <h3>124</h3>
              <p>Miami, FL</p>
            </div>
          </div>
        </div>
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

export default WellHealthPage;
