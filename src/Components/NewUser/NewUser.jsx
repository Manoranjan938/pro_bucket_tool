import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import CreateUser from "Components/CreateUser/CreateUser";
import React from "react";

import "./NewUser.css";

const NewUser = () => {
  return (
    <>
      <div className="new_user_container">
        <CreateUser />
        <div className="new_user_contents">
          <div className="new_user__header">
            <span className="user">User</span>
            <span className="last_active">Last Active</span>
            <span className="status">Status</span>
            <span className="role">Role</span>
            <span className="action">Action</span>
          </div>
          <div className="new_user__body">
            <div className="new_user_row">
              <div className="user user_names">
                <Avatar sx={{ bgcolor: deepOrange[500] }}>S</Avatar>
                <div className="user_details">
                  <span className="user_name">Sagar Sahoo</span>
                  <p className="user_email">sagarsahoo552@gmail.com</p>
                </div>
              </div>
              <div className="last_active">
                <span>21-05-2022</span>
              </div>
              <div className="status">
                <span className="status_text">Active</span>
              </div>
              <div className="role">
                <span>Not Added</span>
              </div>
              <div className="action">
                <span>Show Details</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewUser;
