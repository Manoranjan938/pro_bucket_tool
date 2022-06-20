import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { useState } from "react";

import "./NewTask.css";

const NewTask = ({ open, setOpen }) => {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("LOW");
  const [error, setError] = useState({
    showNameError: false,
    message: ''
  })
  const [taskRequest, setTaskRequest] = useState({
    projectIdentifier: "",
    taskName: "",
    priority: "",
    sprintId: "",
    status: "",
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateTask = () => {
    if(!taskName){
        setError({
            showNameError: true,
            message: 'Please fill out this field'
        })
    }
    else {
        console.log(taskName)
    }
  }

  return (
    <>
      <Modal
        open={open}
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
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            error={error.showNameError}
            helperText={error.message}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Priority</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <MenuItem value="LOW">LOW</MenuItem>
              <MenuItem value="MEDIUM">MEDIUM</MenuItem>
              <MenuItem value="HIGH">HIGH</MenuItem>
            </Select>
          </FormControl>
          <div className="divider" />
          <Button variant="contained" color="primary" onClick={handleCreateTask}>
            Add
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default NewTask;
