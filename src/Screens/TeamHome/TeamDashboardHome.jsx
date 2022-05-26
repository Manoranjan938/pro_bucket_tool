import TeamHomeHeader from "Components/TeamHomeHeader/TeamHomeHeader";
import TeamTaskAndBugList from "Components/TeamTaskAndBugList/TeamTaskAndBugList";
import TeamTaskCards from "Components/TeamTaskCards/TeamTaskCards";
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
      <TeamTaskAndBugList />
    </>
  );
};

export default TeamDashboardHome;
