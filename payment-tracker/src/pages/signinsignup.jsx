import React, { useState } from "react";
import SignIn from "./signin.jsx";
import SignUp from "./signup.jsx";
import "./SignInSignUp.css"; // Your CSS file

const SignInSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const togglePanel = () => setIsSignUp((prev) => !prev);

  return (
    <div className={`container ${isSignUp ? "right-panel-active" : ""}`} id="container">
      <div className="form-container sign-up-container">
        <SignUp togglePanel={togglePanel} />
      </div>
      <div className="form-container sign-in-container">
        <SignIn togglePanel={togglePanel} />
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us, please login with your personal info</p>
            <button className="ghost" onClick={togglePanel}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, User!</h1>
            <p>Enter your details and start your journey with us</p>
            <button className="ghost" onClick={togglePanel}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
