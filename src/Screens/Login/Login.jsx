import React, { useEffect, useState } from "react";
import "./Login.css";

import image from "Images/logo.png";
import googleImage from "Images/google-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { GOOGLE_AUTH_URL } from "Constant/constant";
import { login } from "Apis/Actions/securityActions";
import { connect } from "react-redux";
import { compose } from "redux";

const Login = ({ getUsers, security }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if(security.validToken){
      navigate("/dashboard")
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const LoginRequest = {
      username: email,
      password: password,
    };
    getUsers(LoginRequest);
  };

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
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="input__email"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="login__btn" onClick={handleSubmit}>
              Continue
            </button>
            <span className="login_or">OR</span>
            <a
              className="login__btn__google"
              href={GOOGLE_AUTH_URL}
            >
              <img src={googleImage} alt="" />
              <span>Continue with Google</span>
            </a>
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

function mapDispatchToProps(dispatch) {
  return {
    getUsers: (data) => dispatch(login(data)),
  };
}

const mapStateToProps = (state) => ({
  security: state.security,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Login);
