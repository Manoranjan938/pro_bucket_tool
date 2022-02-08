import React from 'react'

import './Bug.css'
import image from 'Images/bug.png'

const TemplateBug = ({nextPage, currentPage}) => {
    return (
      <div
        className="bug__template__contaier"
        onClick={() => nextPage(currentPage + 1)}
      >
        <div className="image_container">
          <img src={image} alt="" />
        </div>
        <div className="content_container">
          <div className="content">
            <h3>Bug</h3>
            <p>Manage and track bug with us</p>
          </div>
          <div className="icon">
            <i className="fa fa-chevron-right" />
          </div>
        </div>
      </div>
    );
}

export default TemplateBug
