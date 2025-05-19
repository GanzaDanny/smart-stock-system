import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-bg">
      <form className="login-form">
        <h2>Login</h2>
        <div className="input-group">
          <span className="icon">👤</span>
          <input type="text" placeholder="Type your name" />
        </div>
        <div className="input-group">
          <span className="icon">🔒</span>
          <input type="password" placeholder="Enter Your Password" />
        </div>
        <div className="login-links">
          <Link to="/forgot-password" className="forgot">Forget password?</Link>
        </div>
        <button type="submit" className="login-btn">Login</button>
        <div className="signup-link">
          or <Link to="/signup" className="signup">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
