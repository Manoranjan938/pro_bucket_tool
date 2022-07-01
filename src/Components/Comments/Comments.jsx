import { Button, Snackbar } from "@mui/material";
import React, { useState, useEffect } from "react";

import "./Comments.css";

import image from "Images/avatar3.png";
import { connect } from "react-redux";
import { compose } from "redux";
import useAddComment from "hooks/useAddComment";
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert(props, ref){
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const Comments = ({ currentTask, currentUser }) => {
  const [comment, setComment] = useState("");
  const [commentRequest, setCommentRequest] = useState({
    taskId: "",
    userId: "",
    comment: "",
  });
  const [addNewComment] = useAddComment();
  const [statusBar, setStatusBar] = useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'right',
    type: '',
    message: ''
  });

  const handleComment = (e) => {
    e.preventDefault();
    if (!comment) {
      alert("Please add some comment");
    } else {
      setCommentRequest({
        taskId: currentTask.taskSequence,
        userId: currentUser.id,
        comment: comment,
      });
      setComment("");
    }
  };

  const handleClose = (event, reason) => {
    if(reason === 'clickaway'){
      return;
    }
    setStatusBar({open: false});
  }

  useEffect(() => {
    if (
      commentRequest.taskId &&
      commentRequest.userId &&
      commentRequest.comment
    ) {
      callAddComment();
    }
  }, [commentRequest]);

  const callAddComment = async () => {
    try {
      const resp = await addNewComment(commentRequest);
      if (resp.status === 201) {
        setStatusBar({
          open: true,
          type: "success",
          message: resp.data,
        });
      }
    } catch (err) {
      setStatusBar({
        open: true,
        type: "error",
        message: err.response.data.message,
      });
    }
  };

  return (
    <>
      <div className="comments_container">
        <div className="user_avatar">
          <img src={image} alt="" />
        </div>
        <div className="comments">
          <div className="comment-text-field">
            <input
              type="text"
              name=""
              id=""
              placeholder="Add a comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <div className="comment__btns">
            <Button variant="contained" color="primary" onClick={handleComment}>
              Save
            </Button>
            <Button variant="contained" color="inherit">
              Cancel
            </Button>
          </div>
        </div>
        <Snackbar
          open={statusBar.open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          key={statusBar.vertical + statusBar.horizontal}
        >
          <Alert
            onClose={handleClose}
            severity={statusBar.type}
            sx={{ width: "100%" }}
          >
            {statusBar.message}
          </Alert>
        </Snackbar>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  currentTask: state.tasks.selectedTask,
  currentUser: state.security.user,
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(Comments);
