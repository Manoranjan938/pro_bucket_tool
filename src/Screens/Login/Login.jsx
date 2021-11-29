import React from "react";
import "./Login.css";

import image from "Images/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login_container">
      <div className="login__wrapper">
        <div className="login__header">
          <img src={image} alt="" />
          <span>ProBucket</span>
        </div>
        <div className="login__body">
          <div className="login__body__header">
            <span>Login to continue to:</span>
            <h5>Probucket</h5>
          </div>
          <div className="login__body__content">
            <input
              type="text"
              className="input__email"
              placeholder="Enter email"
            />

            <button className="login__btn">Continue</button>
            <span className="login_or">OR</span>
            <button className="login__btn__google">Continue with Google</button>
            <hr />
            <div className="links">
              <Link to="/resetpassword">Can't login?</Link>
              <Link to="/signin">Sign up for an account</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
