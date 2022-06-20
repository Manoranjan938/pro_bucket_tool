import TeamHomeHeader from "Components/TeamHomeHeader/TeamHomeHeader";
import TeamTaskAndBugList from "Components/TeamTaskAndBugList/TeamTaskAndBugList";
import TeamTaskCards from "Components/TeamTaskCards/TeamTaskCards";
import TeamMemberNotification from "Components/TeamMemberNotification/TeamMemberNotification"
import React from "react";
import Helmet from "react-helmet";

const TeamDashboardHome = () => {
  return (
    <>
      <Helmet>
        <title>Team Dashboars | Home</title>
      </Helmet>
      <TeamHomeHeader />
      <TeamTaskCards />
      <TeamMemberNotification />
      <TeamTaskAndBugList />
    </>
  );
};

export default TeamDashboardHome;
