import React from 'react';
import './Auth.css';
import images from './images';

const SignUp = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-left">
          <h2>Welcome Back!</h2>
          <p>To keep connected with us please login with your personal info</p>
          <button className="auth-button">Sign In</button>
        </div>
        <div className="auth-right">
          <h2>Create Account</h2>
          <div className="social-login">
            <a href="#" className="social-button facebook">
            <img src={images.facebook} alt="Facebook" />

            </a>
            <a href="#" className="social-button google">
              <img src="/path/to/google-logo.png" alt="Google" />
            </a>
          </div>
          <p>or use your email for registration</p>
          <form className="auth-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit" className="auth-button">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp; 