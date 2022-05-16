import WorkTask from "Components/WorkTask/WorkTask";
import React from "react";

import "./ProjectWorks.css";

const ProjectWorks = () => {
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
          <div className="todo_task">
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
    </>
  );
};

export default ProjectWorks;
