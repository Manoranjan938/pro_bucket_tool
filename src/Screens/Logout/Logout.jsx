import React from "react";
import { Link } from "react-router-dom";

import "./Logout.css";

import image from "Images/logo.png";
import user from "Images/user.png";

const Logout = () => {

    const truncate = (string, n) => {
      return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    };

  return (
    <div className="logout_container">
      <div className="logout__wrapper">
        <div className="logout__header">
          <img src={image} alt="" />
          <span>ProBucket</span>
        </div>
        <div className="logout__body">
          <div className="logout__body__header">
            <span>Login to continue to:</span>
            <h5>Probucket</h5>
          </div>
          <div className="logout__body__content">
            <div className="logout__user__details">
              <img src={user} alt="" />
              <div className="user">
                <h4>Manoranjan Sahoo</h4>
                <p>{truncate("sahoomanoranjan626@gmail.com", 27)}</p>
              </div>
            </div>
            <button className="logout__btn">Log out</button>
            <hr />
            <div className="logout__links">
              <Link to="/login">Login to another account</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
