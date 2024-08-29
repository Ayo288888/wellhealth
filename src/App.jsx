import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Hero from './components/Hero/Hero';
import WellHealthPage from "./components/about-usPage/WellhealthPage";

import Navbar from "./components/Navigation/Navbar";
import HomePage from "./components/HomePage";
import ServicesPage from "./components/ServicesPage/Services-Page";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about-us" element={<WellHealthPage />} />
          <Route path="services" element={<ServicesPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
