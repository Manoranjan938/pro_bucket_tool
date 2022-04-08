import { Button } from "@mui/material";
import React from "react";

import "./Comments.css";

import image from "Images/avatar3.png";

const Comments = () => {
  return (
    <>
      <div className="comments_container">
        <div className="user_avatar">
          <img src={image} alt="" />
        </div>
        <div className="comments">
          <div className="comment-text-field">
            <input type="text" name="" id="" placeholder="Add a comment" />
          </div>
          <div className="comment__btns">
            <Button variant="contained" color="primary">
              Save
            </Button>
            <Button variant="contained" color="inherit">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
