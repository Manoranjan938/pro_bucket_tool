import { Modal } from '@mui/material';
import TaskDetails from 'Components/TaskDetails/TaskDetails';
import WorkTask from 'Components/WorkTask/WorkTask';
import React, { useState } from 'react'

import './ProjectWorks.css'

const ProjectWorks = () => {
const [showTaskModal, setShowTaskModal] = useState(false);

  const handleTaskModal = () => {
    setShowTaskModal(true);
  }

  const handleClose = () => {
    setShowTaskModal(false);
  }

  return (
    <>
      <div className="project_works_container">
        <div className="projects_task_header_row">
          <div className="project_status_card todo">
            <div className="details">
              <span>To Do</span>
              <span className="counter">3</span>
            </div>
            <div className="icons">
              <i className="fa fa-ellipsis-h" />
              <i className="fa fa-plus" />
            </div>
          </div>
          <div className="project_status_card inprogress">
            <div className="details">
              <span>In Progress</span>
              <span className="counter">3</span>
            </div>
            <div className="icons">
              <i className="fa fa-ellipsis-h" />
              <i className="fa fa-plus" />
            </div>
          </div>
          <div className="project_status_card project_completed">
            <div className="details">
              <span>Completed</span>
              <span className="counter">3</span>
            </div>
            <div className="icons">
              <i className="fa fa-ellipsis-h" />
            </div>
          </div>
        </div>

        <div className="project_task_body_row">
          <div className="todo_task" onClick={handleTaskModal}>
            <WorkTask />
          </div>
          <div className="inprogress_task">
            <WorkTask />
          </div>
          <div className="completed_task">
            <WorkTask />
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
    </>
  );
}

export default ProjectWorks