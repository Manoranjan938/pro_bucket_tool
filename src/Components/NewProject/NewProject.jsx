import ChooseTemplate from "Components/ChooseTemplate/TemplateChoose";
import React, { useState } from "react";

import "./NewProject.css";

const NewProject = () => {
  const [page, setPage] = useState(0);
  const formTitles = ["Choose Type of Project", ""];

  const pageDisplay = () => {
    if (page === 0) {
      return <ChooseTemplate />;
    }
  };

  return (
    <>
        <h1>{formTitles[page]}</h1>
      {pageDisplay()}
    </>
  );
};

export default NewProject;
