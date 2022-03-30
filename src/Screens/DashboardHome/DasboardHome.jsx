import DashboardGraph from 'Components/DashboardGraph/DashboardGraph';
import HomePersonalTask from 'Components/PersonalTask/HomePersonalTask'
import HomeSubTask from 'Components/SubTasks/HomeSubTask';
import React from 'react'

const DasboardHome = () => {
  return (
    <>
      <DashboardGraph />
      <HomePersonalTask />
      <HomeSubTask />
    </>
  );
}

export default DasboardHome