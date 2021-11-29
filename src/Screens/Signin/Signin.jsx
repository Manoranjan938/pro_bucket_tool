import React from "react";
import { Link } from "react-router-dom";
import "./Signin.css";

import image from "Images/logo.png";

const Signin = () => {
  return (
    <div className="signin_container">
      <div className="signin__wrapper">
        <div className="signin__header">
          <img src={image} alt="" />
          <span>ProBucket</span>
        </div>
        <div className="signin__body">
          <div className="signin__body__header">
            <span>Sign up for your account</span>
          </div>
          <div className="signin__body__content">
            <input
              type="text"
              className="input__email"
              placeholder="Enter email"
            />

            <input
              type="text"
              className="input__email"
              placeholder="Enter full name"
            />

            <button className="signin__btn">Continue</button>
            <span className="signin_or">OR</span>
            <button className="signin__btn__google">
              Continue with Google
            </button>
            <hr />
            <div className="signin_links">
              <Link to="/login">Already have an account? Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
