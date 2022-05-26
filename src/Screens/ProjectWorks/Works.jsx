import TeamWorkHeader from "Components/TeamWorkHeader/TeamWorkHeader";
import ProjectWorks from "Components/Works/ProjectWorks";
import React from "react";
import Helmet from "react-helmet";

const Works = ({ title }) => {
  const role = localStorage.getItem("role");
  return (
    <>
      <Helmet>
        <title>{title} | Tasks</title>
      </Helmet>
      {role === "team" && <TeamWorkHeader />}
      <ProjectWorks />
    </>
  );
};

export default Works;
