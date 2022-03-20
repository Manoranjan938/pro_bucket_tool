import React, { useState } from "react";
import "./DashboardHeader.css";

import image from "Images/logo.png";
import user from 'Images/user.png'

import { FaSearch } from "react-icons/fa";
import { MdSettings, MdNotifications } from "react-icons/md";
import { IconButton, Menu, MenuItem, Tooltip } from "@material-ui/core";
import { Avatar, ListItemIcon } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const DashboardHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const nav = useNavigate();
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNotification = () => {
    nav("/dashboard/notifications");
  }
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
          <IconButton>
            <MdSettings className="header__icon" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Notification">
          <IconButton onClick={handleNotification}>
            <MdNotifications className="header__icon" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Account Setting">
          <IconButton onClick={handleClick}>
            <img src={user} alt="" className="user__img" />
          </IconButton>
        </Tooltip>
      </div>

      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Avatar />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Avatar />
          </ListItemIcon>
          My account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default DashboardHeader;
