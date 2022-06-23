import { Modal } from "@mui/material";
import TaskDetails from "Components/TaskDetails/TaskDetails";
import useGetTaskDetails from "hooks/useGetTaskDetails";
import React, { useState } from "react";

import { FiUserPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./WorkTask.css";

const WorkTask = ({ taskDetails }) => {
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [task, getTaskDetails] = useGetTaskDetails();

  const handleTaskModal = (sequence) => {
    setShowTaskModal(true);
    callGetTask(sequence)
  };

  const handleClose = () => {
    setShowTaskModal(false);
  };

  const callGetTask = async (sequence) => {
    try {
      await getTaskDetails(sequence);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="task_container">
        <div className="task_card" onClick={() => handleTaskModal(taskDetails.taskSequence)}>
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
          <TaskDetails close={handleClose} task={task} />
        </Modal>
      </div>
    </>
  );
};

export default WorkTask;
