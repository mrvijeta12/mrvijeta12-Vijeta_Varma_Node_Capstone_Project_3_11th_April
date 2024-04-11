import React, { useState } from "react";
import { Link } from "react-router-dom";
import Signup from "./Signup";
import "./Login.css"

function Login() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [mobileNumber, setMobileNumber] = useState("");

  function handleSignup() {
    setShowSignup(true);
    setShowLogin(false);
  }

  const handleMobileNumberChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

    if (regex.test(value) || value === "") {
      setMobileNumber(value);
    }
  };
  return (
    <div>
      {showLogin && (
        <div className="login">
          <h1>Login</h1>
          <form className="loginform" >
          <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              placeholder="Enter Indian phone number (+91XXXXXXXXXX)"
              required
            />

            <button type="submit">Proceed</button>
          </form>
          <span onClick={handleSignup}>Go to   
            <Link to="/">Signup</Link>

          </span>
        </div>
      )}

      {showSignup && <Signup />}
    </div>
  );
}

export default Login;
