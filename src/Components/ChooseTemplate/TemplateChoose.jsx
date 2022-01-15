import TemplateAll from "Components/TemplateAll/TemplateAll";
import TemplateBug from "Components/TemplateBug/TemplateBug";
import Template from "Components/TemplateProject/Template";
import React from "react";

import './ChooseTemplate.css'

const ChooseTemplate = () => {
  return (
    <>
      <div className="create__project__container">
        <div className="wrapper">
          <Template />
          <TemplateBug />
          <TemplateAll />
        </div>
      </div>
    </>
  );
};

export default ChooseTemplate;
