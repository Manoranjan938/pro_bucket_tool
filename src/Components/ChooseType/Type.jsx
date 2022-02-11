import React from "react";

import "./Type.css";

import image from "Images/project.png";

import { typeData } from "./data";

const ChooseType = ({ details, setDetails, currentPage, setCurrentPage }) => {

  const handleTypeClick = (type) => {
    setCurrentPage(currentPage + 1);
    console.log(type);
  }

  return (
    <>
      <div className="project__type__container">
        {typeData.map((item, index) => {
          return (
            <div className="project__type__wrapper" key={index} onClick={() => handleTypeClick(item.type)}>
              <div className="type_image_container">
                <img src={image} alt="" />
              </div>
              <div className="type_container">
                <div className="type_content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ChooseType;
