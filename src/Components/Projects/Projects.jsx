import React, { useState } from "react";

import "./Projects.css";

import image1 from "Images/Personal-Project.png";
import avatar from "Images/avatar1.png";
import avatar2 from "Images/avatar2.png";
import NoProjects from "Components/NoProject/NoProjects";

const Projects = () => {
  const [projects, setProjects] = useState(true);

  return (
    <>
      {projects ? (
        <div className="projects__container">
          <div className="project__upper_section">
            <img src={image1} alt="" />
            <h2>Please Choose Your Project</h2>
          </div>
          <div className="project__bottom_section">
            <div className="project__card">
              <div className="project__header__details">
                <img src={avatar} alt="" />
                <div className="project__texts">
                  <h4>Project Name</h4>
                  <h5>Project Type</h5>
                </div>
              </div>
              <h4>
                Project Lead: <span>Manoranjan Sahoo</span>
              </h4>
            </div>

            <div className="project__card">
              <div className="project__header__details">
                <img src={avatar2} alt="" />
                <div className="project__texts">
                  <h4>Project Name</h4>
                  <h5>Project Type</h5>
                </div>
              </div>
              <h4>
                Project Lead: <span>Manoranjan Sahoo</span>
              </h4>
            </div>
          </div>
        </div>
      ) : (
        <NoProjects />
      )}
    </>
  );
};

export default Projects;
