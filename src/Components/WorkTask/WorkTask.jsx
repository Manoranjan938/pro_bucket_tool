import React from 'react'

import { FiUserPlus } from "react-icons/fi";

import './WorkTask.css'

const WorkTask = () => {
  return (
    <>
      <div className="task_container">
        <div className="task_card">
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

        <div className="task_card">
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
      </div>
    </>
  );
}

export default WorkTask