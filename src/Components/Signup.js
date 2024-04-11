import React from "react";
import "./FirstScreen.css";
import axios from "axios";
import { useState } from "react";

import Login from "./Login";
import { Link } from "react-router-dom";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");
  const [login, setLogIn] = useState(false);
  const [signup, setSignUp] = useState(true);

  const handleFullNameChange = (e) => {
    const value = e.target.value;
    const emojiRegex =
      /[\u{1F600}-\u{1F6FF}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (!emojiRegex.test(value) && !specialCharRegex.test(value)) {
      setFullName(value);
      setError("");
    } else {
      setError("No emojis or special characters allowed.");
    }
  };

  const handleMobileNumberChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

    if (regex.test(value) || value === "") {
      setMobileNumber(value);
    }
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  const handleProceed = async (e) => {
    e.preventDefault();

    if (!fullName || !profilePicture || !mobileNumber) {
      alert("Please fill all fields");
      return;
    }

    const formData = new FormData();
    formData.append("username", fullName);
    formData.append("mobileNumber", mobileNumber);
    formData.append("picture", profilePicture);

    try {
      const resp = await axios.post(
        "http://localhost:5000/api/user",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (resp.data.isRegistered === true) {
        alert("Mob no is already in use ");

        return;
      } else {
        alert("Signup Successful");
        setFullName("");
        setMobileNumber("");
        setProfilePicture(null);

        document.getElementById("profilePicture").value = "";
      }
    } catch (error) {
      console.log(error);
      alert("Error occurred while signing up");
    }
  };

  function handleLoginClick() {
    setLogIn(true);
    setSignUp(false);
  }
  return (
    <div>
      {signup && (
        <div className="form">
          <h2>Signup</h2>

          <form onSubmit={handleProceed}>
            <label htmlFor="profilePicture">Select Profile Picture</label>
            <input
              type="file"
              id="profilePicture"
              name="profilePicture"
              accept="image/*"
              onChange={handleProfilePictureChange}
              required
            />

            <label htmlFor="fullName">Full Name*</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={handleFullNameChange}
              pattern="[A-Za-z\s]+"
              required
            />

            {error && (
              <div style={{ color: "red", fontSize: "12px" }}>{error}</div>
            )}

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
          <span>Already have an account? </span>
          <span onClick={handleLoginClick}>
            <Link>Log In !..</Link>
          </span>
        </div>
      )}

      {login && <Login />}
    </div>
  );
};

export default Signup;
