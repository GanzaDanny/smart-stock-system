import React from 'react';
import './SignUp.css';

const SignUpPage = () => {
  return (
    <div className="signup-container">
      <div className="signup-left">
        <img
          src="/path-to-your-image.jpg"
          alt="Stock background"
          className="signup-image"
        />
      </div>
      <div className="signup-right">
        <form className="signup-form">
          <h2>SIGN UP</h2>
          <label>Full names</label>
          <input type="text" placeholder="Name" />
          <label>Email</label>
          <input type="email" placeholder="Enter your Email" />
          <label>Create Password</label>
          <input type="password" placeholder="Enter strong password" />
          <label>Repeat password</label>
          <input type="password" placeholder="Repeat password" />
          <div className="signup-buttons">
            <button type="submit" className="signup-btn">SIGN UP</button>
            <a href="/login" className="login-btn">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage; 