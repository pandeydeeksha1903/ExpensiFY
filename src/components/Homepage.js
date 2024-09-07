import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Button } from "antd"; // Using Ant Design for clean buttons
import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import moneyImage from '../img.png'; // Import the image here

const HeroImage = () => {
  return (
    <div className="hero-image">
      <img src={moneyImage} alt="Track your expenses" />
    </div>
  );
};

const FirstPage = () => {
  // Function to navigate to the external signup page
  const handleGetStarted = () => {
    window.location.href = 'https://wexpensify.vercel.app/'; // External link to Vercel page
  };

  return (
    <div className="landing-page">

      <header className="landing-header">
        <nav className="navbar">
          <h1 className="brand-logo">>>> ExpensiFY</h1>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title"><b>Easy & Seamless Tracking!</b></h1>
          <p className="hero-description">
            Take control of your finances and make smart decisions with our easy-to-use ExpensiFY. Keep track of your income, spending, and savings all in one place.
          </p>

          <Button type="primary" size="large" className="get-started-btn" onClick={() => handleGetStarted()}>
            Get Started
          </Button>
        </div>
        <HeroImage /> {/* Use the HeroImage component here */}
      </main>

      <section className="features-section" id="features">
        <h2 className="section-title">Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3><b>Easy Tracking</b></h3>
            <p>Keep track of all your expenses and incomes effortlessly with real-time updates.</p>
          </div>
          <div className="feature-item">
            <h3><b>Detailed Reports</b></h3>
            <p>Generate reports and visual charts to get insights into your financial health.</p>
          </div>
          <div className="feature-item">
            <h3><b>Secure Data</b></h3>
            <p>All your data is stored securely with top-notch encryption.</p>
          </div>
          <div className="feature-item">
            <h3><b>Generate CSV</b></h3>
            <p>All the expenses can be downloaded in CSV format also, you can upload the CSV file and track your expenses.</p>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <h2 className="section-title">About Us</h2>
        <p>
          At ExpensiFY, we believe in simplifying financial management for everyone. Our platform helps you organize your financial life, making it easy to monitor your spending and saving habits.
        </p>
      </section>

      <footer className="footer" id="contact">
        <div className="footer-content">
          <h3 className="contact-heading">Contact Us</h3>
          <p>Email: deekshap1903@gmail.com</p>
          <p>Phone: +91 9752298448</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/deeksha-pandey-40a873246">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FirstPage;