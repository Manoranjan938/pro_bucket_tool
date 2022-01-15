import React from "react";

import "./Sidebar.css";
import avatar1 from "Images/avatar1.png";

import { GoProject } from "react-icons/go";
import { FaFilter } from "react-icons/fa";
import {
  AiOutlineSetting,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import SidebarOption from "Components/SidebarOptions/SidebarOption";
import NoProjects from "Components/NoProject/NoProjects";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar__container">
        <div className="sidebar">
          <div className="sidebar__contents">
            <div className="sidebar__project__name">
              <img src={avatar1} alt="" />
              <div className="project__details">
                <h4>Netflix Clone</h4>
                <span>Software Project</span>
              </div>
            </div>

            <SidebarOption
              active
              Icon={AiOutlineFundProjectionScreen}
              text="Projects"
            />
            <SidebarOption Icon={GoProject} text="Your work" />
            <SidebarOption Icon={FaFilter} text="Filter" />
            <SidebarOption Icon={AiOutlineSetting} text="Project Setting" />
          </div>
        </div>
        <NoProjects />
      </div>
    </>
  );
};

export default Sidebar;
