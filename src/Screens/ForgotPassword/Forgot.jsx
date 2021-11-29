import React from "react";
import { Link } from "react-router-dom";

import "../Signin/Signin.css";

import image from "Images/logo.png";

const Forgot = () => {
  return (
    <div className="signin_container">
      <div className="signin__wrapper">
        <div className="signin__header">
          <img src={image} alt="" />
          <span>ProBucket</span>
        </div>
        <div className="signin__body">
          <div className="signin__body__header">
            <span>Can't login or forgot password</span>
          </div>
          <div className="signin__body__content">
            <input
              type="text"
              className="input__email"
              placeholder="Enter email"
            />

            <button className="signin__btn">Continue</button>
            <hr />
            <div className="signin_links">
              <Link to="/login">Return to login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
