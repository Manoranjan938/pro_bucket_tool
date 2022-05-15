import TeamWorkHeader from 'Components/TeamWorkHeader/TeamWorkHeader'
import ProjectWorks from 'Components/Works/ProjectWorks'
import React from 'react'

const Works = () => {
  const role = localStorage.getItem("role")
  return (
    <>
    {role === "team" && <TeamWorkHeader />}
    <ProjectWorks />
    </>
  )
}

export default Works