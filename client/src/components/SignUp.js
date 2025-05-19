import React from 'react';
import './SignUpPage.css';

const SignUpPage = () => {
  return (
    <div className="signup-container">
      <div className="signup-left">
        {/* You can use an <img> tag or background-image in CSS */}
        <img
          src="your-image-path.jpg"
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
            <button type="button" className="login-btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
