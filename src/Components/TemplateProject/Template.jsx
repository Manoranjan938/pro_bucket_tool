import React from 'react'

import './Template.css'

import { data } from './data'

const Template = ({nextPage, currentPage, details, setDetails}) => {

  const handleClick = (type) => {
    nextPage(currentPage + 1)
    console.log(type);
  }

    return (
      <>
        {data.map((item, index) => {
          return (
            <div
              className="project__template__contaier"
              onClick={() => handleClick(item.templateType)}
              key={index}
            >
              <div className="image_container">
                <img src={item.image} alt="" />
              </div>
              <div className="content_container">
                <div className="content">
                  <h3>{item.templateTitle}</h3>
                  <p>
                    {item.templateDescription}
                  </p>
                </div>
                <div className="icon">
                  <i className="fa fa-chevron-right" />
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
}

export default Template
