import React from "react";

import "./Prices.css";

const Prices = () => {
  return (
    <div className="price__container">
      <h1>Simple plans</h1>
      <div className="price__cards">
        <div className="price__card">
          <div className="price__header">
            <h3>Personal</h3>
          </div>
          <div className="price__body">
            <h1>INR 0</h1>
            <h5>per user/month</h5>
            <span>up to single user</span>
            <button className="price__btn">Get Started</button>
            <p>Free Forever</p>
          </div>
        </div>
        <div className="price__card">
          <div className="price__header">
            <h3>Team</h3>
          </div>
          <div className="price__body">
            <h1>INR 0</h1>
            <h5>per user/month</h5>
            <span>up to 5-6 user</span>
            <button className="price__btn" >Get Started</button>
            <p>Free Forever</p>
          </div>
        </div>
        <div className="price__card">
          <div className="price__header">
            <h3>Enterprise</h3>
          </div>
          <div className="price__body">
            <h1>INR 299</h1>
            <h5>per user/month</h5>
            <span>up to single user</span>
            <button  className="price__btn">Get Started</button>
            <p>Starts at 1,499/month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
