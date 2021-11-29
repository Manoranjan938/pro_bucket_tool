import React from "react";
import "./DashboardHeader.css";

import image from "Images/logo.png";
import user from 'Images/user.png'

import { FaSearch } from "react-icons/fa";
import { MdSettings, MdNotifications } from "react-icons/md";

const DashboardHeader = () => {
  return (
    <div className="dashboard__header">
      <div className="dashboard__header__logo">
        <img src={image} alt="" />
        <span>ProBucket</span>
      </div>
      <div className="header__icons">
        <div className="search__field">
          <FaSearch className="search" />
          <input type="text" placeholder="Search" />
        </div>
        <MdSettings className="header__icon" />
        <MdNotifications className="header__icon" />
        <img src={user} alt="" />
      </div>
    </div>
  );
};

export default DashboardHeader;
