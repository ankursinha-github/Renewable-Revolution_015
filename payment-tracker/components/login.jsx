import React, { useState } from 'react';

const SignupLogin = () => {
  const [isSignupActive, setIsSignupActive] = useState(false);
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")));

  const handleSignup = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      alert("Email already registered! Please sign in.");
      return;
    }

    const newUser = { id: users.length + 1, name, email, password };
    setUsers([...users, newUser]);
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    alert("Sign-up Successful!");
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    const currentUser = users.find(user => user.email === email && user.password === password);
    if (currentUser) {
      alert(`Sign-in Successful! Welcome, ${currentUser.name}`);
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      setCurrentUser(currentUser);
      window.location.href = "main.html";
    } else {
      const existingUser = users.find(user => user.email === email);
      if (existingUser) {
        const reset = confirm("Incorrect password. Would you like to reset your password?");
        if (reset) {
          const newPassword = prompt("Enter your new password:");
          if (newPassword) {
            existingUser.password = newPassword;
            setUsers([...users]);
            localStorage.setItem("users", JSON.stringify(users));
            alert("Password reset successful. Please login with your new password.");
          }
        }
      } else {
        alert("Invalid Credentials. No account found for this email.");
      }
    }
  };

  return (
    <div className="container">
      <div className={`form-container sign-in-container ${isSignupActive ? '' : 'right-panel-active'}`}>
        <form onSubmit={handleLogin}>
          <h1>Sign In</h1>
          <div className="social-container">
            <a href="#" className="socialf">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" className="socialg">
              <i className="fa fa-google"></i>
            </a>
            <a href="#" className="sociall">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
          <span>or use your account</span>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <a href="#">Forgot Your Password</a>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className={`form-container sign-up-container ${isSignupActive ? 'right-panel-active' : ''}`}>
        <form onSubmit={handleSignup}>
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="socialf">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" className="socialg">
              <i className="fa fa-google"></i>
            </a>
            <a href="#" className="sociall">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" onClick={() => setIsSignupActive(false)}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, User!</h1>
            <p>Enter your details and start journey with us</p>
            <button className="ghost" onClick={() => setIsSignupActive(true)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupLogin;