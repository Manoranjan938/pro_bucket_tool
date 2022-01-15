import React from 'react'

import './TemplateAll.css'
import image from 'Images/all.png'

const TemplateAll = () => {
    return (
      <div className="all__template__contaier">
        <div className="image_container">
          <img src={image} alt="" />
        </div>
        <div className="content_container">
          <div className="content">
            <h3>Project & Bug</h3>
            <p>You can manage and track your project and also bugs with us.</p>
          </div>
          <div className="icon">
            <i className="fa fa-chevron-right" />
          </div>
        </div>
      </div>
    );
}

export default TemplateAll
