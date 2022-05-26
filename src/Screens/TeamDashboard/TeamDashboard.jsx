import DashboardHeader from "Components/DashboardHeader/DashboardHeader";
import TeamSidebar from "Components/TeamSidebar/TeamSidebar";
import React from "react";

import "./TeamDashboard.css";

const TeamDashboard = ({ children }) => {
  localStorage.setItem("role", "team");
  return (
    <>
      <div className="team_sidebar__layout">
        <div className="const">
          <DashboardHeader />
          <TeamSidebar />
        </div>
        <div className="team_sidebar__main">{children}</div>
      </div>
    </>
  );
};

export default TeamDashboard;
