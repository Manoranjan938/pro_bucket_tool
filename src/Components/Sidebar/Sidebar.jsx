import React from "react";

import "./Sidebar.css";
import avatar1 from "Images/avatar1.png";
import { Link } from "react-router-dom";
import { sidebarData } from "./Data/SidebarData";
import {AiOutlineSetting} from 'react-icons/ai'

const Sidebar = () => {
  return (
    <>
      <div className="sidebar__container">
        <div className="sidebar">
          <div className="sidebar__contents">
            <div className="sidebar__project__name">
              <img src={avatar1} alt="" />
              <div className="project_sidebar_details">
                <h4>Netflix Clone</h4>
                <span>Software Project</span>
              </div>
            </div>
            <div className="divider" />
            <div className="sidebar_link_container">
              {sidebarData.map((item) => {
                return (
                  <Link className="sidebar_link" to={item.path} key={item.id}>
                    <div className="icon">{item.icon}</div>
                    <div className="label">{item.title}</div>
                    {/* <div className="notification_icon">5</div> */}
                  </Link>
                );
              })}
            </div>
            <div className="divider" />
            <div className="sidebar_link_container">
              <Link className="sidebar_link" to="/project-setting">
                <div className="icon">
                  <AiOutlineSetting />
                </div>
                <div className="label">
                  <span>Project Setting</span>
                </div>
                {/* <div className="notification_icon">5</div> */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
