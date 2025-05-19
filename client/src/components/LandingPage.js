import React from 'react';
import './Home.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="brand">Smart Stock</div>
        <div className="nav-links">
          <a href="#home" aria-label="Go to Home Section">Home</a>
          <a href="#about" aria-label="Go to About Us Section">About Us</a>
          <a href="#contact" aria-label="Go to Contact Section">Contact Us</a>
        </div>
      </nav>

      <main className="main-content">
        <h1>Efficient Storage, Smarter Future</h1>
        <p className="subtitle">Monitor, Manage<br />and Optimize your<br />stock with ease</p>
        <a href="/login" className="get-started-btn" aria-label="Go to Login Page">Get Started</a>

        <div className="features">
          <div className="feature">
            <h2>Real-time Monitoring</h2>
            <p>Track temperature<br />Humidity and<br />Stock levels instantly</p>
          </div>
          <div className="feature">
            <h2>AI-Powered Insights</h2>
            <p>Get predictions to<br />prevent spoilage and<br />optimize storage</p>
          </div>
        </div>
      </main>

      <footer>
        <p>© 2025 Smart Stock System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
