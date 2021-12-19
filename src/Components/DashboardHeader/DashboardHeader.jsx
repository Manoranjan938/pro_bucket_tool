import React from "react";
import "./DashboardHeader.css";

import image from "Images/logo.png";
import user from 'Images/user.png'

import { FaSearch } from "react-icons/fa";
import { MdSettings, MdNotifications } from "react-icons/md";
import { IconButton, Menu, MenuItem, Tooltip } from "@material-ui/core";

const DashboardHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
        <Tooltip title="Setting">
          <IconButton onClick={handleClick}>
            <MdSettings className="header__icon" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Notification">
          <IconButton>
            <MdNotifications className="header__icon" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Account Setting">
          <IconButton>
            <img src={user} alt="" className="user__img" />
          </IconButton>
        </Tooltip>
      </div>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="setting__menu"
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default DashboardHeader;
