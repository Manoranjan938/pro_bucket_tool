//import DashboardGraph from "Components/DashboardGraph/DashboardGraph";
import HomePersonalTask from "Components/PersonalTask/HomePersonalTask";
import HomeSubTask from "Components/SubTasks/HomeSubTask";
import React from "react";
import Helmet from "react-helmet";

const DasboardHome = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title} | Home</title>
      </Helmet>
      {/* <DashboardGraph /> */}
      <HomePersonalTask />
      <HomeSubTask />
    </>
  );
};

export default DasboardHome;
