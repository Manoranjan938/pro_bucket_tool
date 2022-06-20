import TaskStatusCompletion from 'Components/TaskCompletionStatus/TaskStatusCompletion'
import React from 'react'

import './ExtraDetails.css'

const ExtraDetails = () => {
  return (
    <>
      <div className="extra_details_container">
        <div className="task_completion_progress_bars">
          <TaskStatusCompletion />
        </div>
        <div className="extra_owner_details">
          <div className="owner__details__header">
            <h5>Details</h5>
          </div>
          <div className="owner__details__body">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            eligendi iste suscipit laborum facere voluptatem veniam expedita
            tempora omnis praesentium necessitatibus assumenda ex temporibus
            modi alias reiciendis architecto tempore consectetur repudiandae
            dicta nobis, nulla aspernatur esse. Nihil illo vel natus quam fugit
            nisi expedita cupiditate corporis totam incidunt. Eaque, quia?
          </div>
        </div>
      </div>
    </>
  );
}

export default ExtraDetails