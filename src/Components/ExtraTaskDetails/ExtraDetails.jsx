import { Avatar } from "@mui/material";
import TaskStatusCompletion from "Components/TaskCompletionStatus/TaskStatusCompletion";
import React from "react";

import "./ExtraDetails.css";

const ExtraDetails = () => {
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}`,
    };
  }

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
            <div className="labels">
              <div className="label">Assignee</div>
              <div className="choose_one">
                <span className="unassign">Un-assigned</span>
                <span className="change">Change</span>
              </div>
            </div>
            <div className="labels">
              <div className="label">Reporter</div>
              <div className="choose_one">
                <Avatar {...stringAvatar("Manua")} />
                <span className="name">Manua</span>
              </div>
            </div>
            <div className="labels">
              <div className="label">Priority</div>
              <div className="choose_one">
                <span className="unassign">Low</span>
                <span className="change">Change</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtraDetails;
