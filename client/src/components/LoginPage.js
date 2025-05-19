import React from 'react';
import './Login.css';

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
          <a href="/reset-password" className="forgot">forget password ?</a>
        </div>
        <button type="submit" className="login-btn">Login</button>
        <div className="signup-link">
          or <a href="/signup" className="signup">Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage; 