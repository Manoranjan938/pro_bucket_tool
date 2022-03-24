import React, { useState } from "react";

import image from 'Images/avatar1.png'
import { Button, TextField } from "@mui/material";

import './ProjectSetting.css';

const ProjectSettings = () => {

  const [project, setProject] = useState({
    name: '',
    projectLead: '',
    defaultAssign: ''
  });

  return (
    <>
      <div className="project__setting__container">
        <h2>Project Details</h2>
        <div className="project__setting__details">
          <div className="project__image">
            <img src={image} alt="" />
          </div>
          <div className="project__fields">
            <TextField
              id="outlined-multiline-flexible"
              label="Name"
              fullWidth
              value={project.name}
              onChange={(e) => setProject({ ...project, name: e.target.value })}
              className="text-field"
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Project Lead"
              fullWidth
              value={project.projectLead}
              onChange={(e) => setProject({ ...project, projectLead: e.target.value })}
              className="text-field"
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Default Assignee"
              fullWidth
              value={project.defaultAssign}
              onChange={(e) => setProject({ ...project, defaultAssign: e.target.value })}
              className="text-field"
            />
          <Button variant="contained">Save</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSettings;
