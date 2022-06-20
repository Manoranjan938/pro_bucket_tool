import { Modal } from "@mui/material";
import TaskDetails from "Components/TaskDetails/TaskDetails";
import React, { useState } from "react";

import { FiUserPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./WorkTask.css";

const WorkTask = ({ taskDetails }) => {
  const [showTaskModal, setShowTaskModal] = useState(false);

  const handleTaskModal = () => {
    setShowTaskModal(true);
  };

  const handleClose = () => {
    setShowTaskModal(false);
  };
  return (
    <>
      <div className="task_container">
        <div className="task_card" onClick={handleTaskModal}>
          <div className="task">
            <div className="contents">
              <span className="task_names">{taskDetails.taskName}</span>
              <span className="asignee_icon">
                <FiUserPlus />
              </span>
            </div>
            <div className="subtask"></div>
            <div className="extras">
              <div className="more_icons">
                {/* <i className="fa fa-calendar-check-o" /> */}
                {taskDetails.priority === "LOW" && (
                  <span className="priority_low">
                    <i className="fa fa-flag" />
                  </span>
                )}
                {taskDetails.priority === "MEDIUM" && (
                  <span className="priority_med">
                    <i className="fa fa-flag" />
                  </span>
                )}
                {taskDetails.priority === "HIGH" && (
                  <span className="priority_high">
                    <i className="fa fa-flag" />
                  </span>
                )}
                {taskDetails.priority === "" && (
                  <span className="priority_none">
                    <i className="fa fa-flag-o" />
                  </span>
                )}
              </div>
              {/* <div className="edit_options">
                <i className="fa fa-check" />
                <i className="fa fa-ellipsis-h" />
              </div> */}
              <div className="task_id">
                <Link to="#">{taskDetails.taskSequence}</Link>
              </div>
            </div>
          </div>
        </div>

        <Modal
          open={showTaskModal}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <TaskDetails close={handleClose} />
        </Modal>
      </div>
    </>
  );
};

export default WorkTask;
