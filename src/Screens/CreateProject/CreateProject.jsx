import Template from 'Components/TemplateProject/Template'
import TemplateAll from 'Components/TemplateAll/TemplateAll'
import TemplateBug from 'Components/TemplateBug/TemplateBug'
import React from 'react'

import './CreateProject.css'

const CreateProject = () => {
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
}

export default CreateProject
