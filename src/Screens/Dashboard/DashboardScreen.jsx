import DashboardHeader from "Components/DashboardHeader/DashboardHeader";
import Sidebar from "Components/Sidebar/Sidebar";
import React from "react";

import './DashboardScreen.css'

const DashboardScreen = ({ children }) => {
  return (
    <>
      <div className="sidebar__layout">
        <div className="const">
          <DashboardHeader />
          <Sidebar />
        </div>
        <div className="sidebar__main">{children}</div>
      </div>
    </>
  );
};

export default DashboardScreen;
