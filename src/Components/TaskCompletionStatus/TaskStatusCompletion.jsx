import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react'

import './TaskStatus.css'

const TaskStatusCompletion = () => {
  return (
    <>
      <div className="task__status__container">
        <div className="task__status__header">
          <h5>Task Progress</h5>
        </div>
        <div className="task__status__body">
          <div className="status__in__progress">
            <Box sx={{ position: "relative", display: "inline-flex" }}>
              <CircularProgress variant="determinate" value={60} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="caption"
                  component="div"
                  color="text.secondary"
                >
                  {`${Math.round(60)}%`}
                </Typography>
              </Box>
            </Box>
            <div className="status__label">
              <span>In Progress</span>
            </div>
          </div>
          <div className="status__done">
            <Box sx={{ position: "relative", display: "inline-flex" }}>
              <CircularProgress
                variant="determinate"
                color="success"
                value={40}
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="caption"
                  component="div"
                  color="text.secondary"
                >
                  {`${Math.round(40)}%`}
                </Typography>
              </Box>
            </Box>
            <div className="status__label">
              <span>Completed</span>
            </div>
          </div>
          <div className="status__not__started">
            <Box sx={{ position: "relative", display: "inline-flex" }}>
              <CircularProgress
                variant="determinate"
                color="secondary"
                value={40}
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="caption"
                  component="div"
                  color="text.secondary"
                >
                  {`${Math.round(40)}%`}
                </Typography>
              </Box>
            </Box>
            <div className="status__label">
              <span>Not Started</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskStatusCompletion