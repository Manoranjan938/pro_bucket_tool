import Template from "Components/TemplateProject/Template.jsx";
import React from "react";

import './ChooseTemplate.css'

const ChooseTemplate = ({title, details, setDetails, currentPage, setCurrentPage}) => {
  return (
    <>
      <div className="create__project__container">
        <div className="wrapper">
          <h4>{title}</h4>
          <Template
            nextPage={setCurrentPage}
            currentPage={currentPage}
            details={details}
            setDetails={setDetails}
          />
        </div>
      </div>
    </>
  );
};

export default ChooseTemplate;
