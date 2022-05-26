import { Modal } from "@mui/material";
import TaskDetails from "Components/TaskDetails/TaskDetails";
import React, { useState } from "react";

import { FiUserPlus } from "react-icons/fi";

import "./WorkTask.css";

const WorkTask = () => {
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
              <span className="task_names">Have to check youtube</span>
              <span className="asignee_icon">
                <FiUserPlus />
              </span>
            </div>
            <div className="subtask"></div>
            <div className="extras">
              <div className="more_icons">
                <i className="fa fa-calendar-check-o" />
                <i className="fa fa-flag-o" />
              </div>
              <div className="edit_options">
                <i className="fa fa-check" />
                <i className="fa fa-ellipsis-h" />
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
