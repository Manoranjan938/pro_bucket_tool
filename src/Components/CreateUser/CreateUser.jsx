import React from "react";

import "./CreatUser.css";

import image1 from "Images/new_user.png";
import { Button, TextField } from "@mui/material";

const CreateUser = () => {
  return (
    <>
      <div className="create_new_user">
        <div className="image">
          <img src={image1} alt="" />
        </div>
        <div className="user_fields">
          <h3>There's a team behind every success</h3>
          <p>Add your team and start creating great things together</p>
          <TextField
            fullWidth
            className="input_form"
            id="outlined-basic"
            label="Email address"
            variant="outlined"
          />
          <TextField
            fullWidth
            className="input_form"
            id="outlined-basic"
            label="User's name"
            variant="outlined"
          />
          <Button variant="contained" color="primary" className="new_team_btn">
            Add Team Member
          </Button>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
