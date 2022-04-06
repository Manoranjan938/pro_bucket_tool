import React, { useState } from "react";

import "./SubTask.css";

import { RiArrowDropDownLine } from "react-icons/ri";
import { BsPlus } from "react-icons/bs";
import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { GoPrimitiveDot, GoCheck } from "react-icons/go";
import { BiCopyAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const SubTask = () => {
  const [subtaskType] = useState("subtask");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="subtask_container">
        <div className="subtask_header">
          <h5>Subtasks</h5>
          <div className="subtask_icons">
            <div className="order_by_btn" onClick={handleClick}>
              <span>Order by</span>
              <RiArrowDropDownLine />
            </div>
            <Tooltip title="Add new Subtask">
              <IconButton>
                <BsPlus />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="subtask_body">
          <div className="subtask_card">
            <div className="subtask_type_icon">
              {subtaskType === "bug" && (
                <span className="icon_bug">
                  <GoPrimitiveDot />
                </span>
              )}
              {subtaskType === "task" && (
                <span className="icon_task">
                  <GoCheck />
                </span>
              )}
              {subtaskType === "subtask" && (
                <span className="icon_subtask">
                  <BiCopyAlt />
                </span>
              )}
            </div>
            <div className="subtask_unique_id">
              <Link to="#">
                <span>MCB-21</span>
              </Link>
            </div>
            <div className="subtask_title">
              <p>
                Get access token after giving correct user name and password
              </p>
            </div>
            <div className="subtask_extras">
              <div className="subtask_priority">
                <span className="icon_priority_low">
                  <i className="fa fa-flag" />
                </span>
              </div>
              <div className="subtask_asignee"></div>
              <div className="subtask_status"></div>
            </div>
          </div>
        </div>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Created</MenuItem>
        <MenuItem onClick={handleClose}>Key</MenuItem>
        <MenuItem onClick={handleClose}>Priority</MenuItem>
        <MenuItem onClick={handleClose}>Status</MenuItem>
        <MenuItem onClick={handleClose}>Assignee</MenuItem>
      </Menu>
    </>
  );
};

export default SubTask;
