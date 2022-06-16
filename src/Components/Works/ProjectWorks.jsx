import { Button, Modal, TextField } from "@mui/material";
import WorkTask from "Components/WorkTask/WorkTask";
import React, { useState } from "react";

import "./ProjectWorks.css";

const ProjectWorks = ({ tasks }) => {
  const [showNewModal, setShowNewModal] = useState(false);

  const handleNewModal = () => {
    setShowNewModal(true);
  };

  const handleClose = () => {
    setShowNewModal(false);
  };

  const proTasks = tasks.map((task, index) => (
    <WorkTask key={index} taskDetails={task} />
  ))

  let todoItems = [];
  let inProgressItems = [];
  let completedItems = [];

  for (let i = 0; i < proTasks.length; i++) {
    //console.log(proTasks[i].props.taskDetails.status)
    if (proTasks[i].props.taskDetails.status === "TODO") {
      todoItems.push(proTasks[i]);
    }

    if (proTasks[i].props.taskDetails.status === "INPROGRESS") {
      inProgressItems.push(proTasks[i]);
    }

    if (proTasks[i].props.taskDetails.status === "COMPLETED") {
      completedItems.push(proTasks[i]);
    }
  }

  return (
    <>
      <div className="project_works_container">
        <div className="projects_task_header_row">
          <div className="project_status_card todo">
            <div className="details">
              <span>To Do</span>
              <span className="counter">{todoItems.length}</span>
            </div>
            <div className="icons">
              <i className="fa fa-ellipsis-h" />
              <i className="fa fa-plus" onClick={handleNewModal} />
            </div>
          </div>
          <div className="project_status_card inprogress">
            <div className="details">
              <span>In Progress</span>
              <span className="counter">{inProgressItems.length}</span>
            </div>
            <div className="icons">
              <i className="fa fa-ellipsis-h" />
              <i className="fa fa-plus" onClick={handleNewModal} />
            </div>
          </div>
          <div className="project_status_card project_completed">
            <div className="details">
              <span>Completed</span>
              <span className="counter">{completedItems.length}</span>
            </div>
            <div className="icons">
              <i className="fa fa-ellipsis-h" />
            </div>
          </div>
        </div>

        <div className="project_task_body_row">
          <div className="todo_task">
            {todoItems}
            {/* <WorkTask /> */}
          </div>
          <div className="inprogress_task">
            {inProgressItems}
            {/* <WorkTask /> */}
          </div>
          <div className="completed_task">
            {completedItems}
            {/* <WorkTask /> */}
          </div>
        </div>
      </div>

      <Modal
        open={showNewModal}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <div className="new_task">
          <div className="new_task_header">
            <h3>New Task</h3>
          </div>
          <div className="divider" />
          <TextField
            fullWidth
            className="input_form"
            id="outlined-multiline-static"
            label="About task..."
            multiline
            rows={4}
          />
          <div className="divider" />
          <Button variant="contained" color="primary">
            Add
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ProjectWorks;
