import React from 'react';
import './ResetPassword.css';

const ResetPassword = () => {
  return (
    <div className="reset-bg">
      <form className="reset-form">
        <h2>Reset Password</h2>
        <label>New Password</label>
        <input type="password" placeholder="New Password" />
        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm Password" />
        <button type="submit" className="reset-btn">Submit</button>
      </form>
    </div>
  );
};

export default ResetPassword;