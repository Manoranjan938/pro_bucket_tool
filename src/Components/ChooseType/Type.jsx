import React from 'react';

import image from 'Images/project.png'

const ChooseType = () => {
  return (
    <>
      <div className="project__template__contaier">
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
    </>
  );
};

export default ChooseType;
