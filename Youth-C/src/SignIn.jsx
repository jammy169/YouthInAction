import React from 'react';
import './Auth.css';
import facebookLogo from './assets/facebook.png';
import GoogleLogo from './assets/Google.png';


const SignIn = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-left">
          <h1>Welcome Back!</h1>
          <br></br>
          <br></br>
         <h3> <p>To keep connected with us please login with your personal info</p></h3>
          <button className="auth-button">Sign In</button>
        </div>
        <div className="auth-right">
          <h2>Create Account</h2>
          <div className="social-login">
            <a href="#" className="social-button facebook">
            <img src={facebookLogo} alt="Facebook" />
            </a>
            <a href="#" className="social-button google">
            <img src={GoogleLogo} alt="Facebook" />
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

export default SignIn; 