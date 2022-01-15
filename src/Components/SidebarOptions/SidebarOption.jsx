import React from "react";
import { Link } from "react-router-dom";

import "./SidebarOption.css";

const SidebarOption = ({ active, Icon, text }) => {
  return (
    <Link to="#">
      <div className={`sidebar__options ${active && "sidebarOption--active"}`}>
        <Icon className="icon" />
        <h2>{text}</h2>
      </div>
    </Link>
  );
};

export default SidebarOption;
