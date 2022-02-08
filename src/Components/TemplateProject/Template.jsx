import React from 'react'

import './Template.css'

import image from 'Images/project.png'

const Template = ({nextPage, currentPage}) => {
    return (
      <div className="project__template__contaier" onClick={() => nextPage(currentPage + 1)}>
        <div className="image_container">
          <img src={image} alt="" />
        </div>
        <div className="content_container">
          <div className="content">
            <h3>Project</h3>
            <p>
              Visualize and advance your project using issues and powerful
              board.
            </p>
          </div>
          <div className="icon">
            <i className="fa fa-chevron-right" />
          </div>
        </div>
      </div>
    );
}

export default Template
