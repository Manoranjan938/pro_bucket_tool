import TemplateAll from "Components/TemplateAll/TemplateAll";
import TemplateBug from "Components/TemplateBug/TemplateBug";
import Template from "Components/TemplateProject/Template";
import React from "react";

import './ChooseTemplate.css'

const ChooseTemplate = ({title, details, setDetails, currentPage, setCurrentPage}) => {
  return (
    <>
      <div className="create__project__container">
        <div className="wrapper">
          <h4>{title}</h4>
          <Template nextPage={setCurrentPage} currentPage={currentPage} />
          <TemplateBug nextPage={setCurrentPage} currentPage={currentPage} />
          <TemplateAll nextPage={setCurrentPage} currentPage={currentPage} />
        </div>
      </div>
    </>
  );
};

export default ChooseTemplate;
