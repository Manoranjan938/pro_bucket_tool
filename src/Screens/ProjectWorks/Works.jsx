import TeamWorkHeader from "Components/TeamWorkHeader/TeamWorkHeader";
import ProjectWorks from "Components/Works/ProjectWorks";
import useGetTaskLists from "hooks/useGetTaskLists";
import React, { useEffect } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { compose } from "redux";

const Works = ({ title, currentProject }) => {

  const [tasks, getTaskLists] = useGetTaskLists();

  const callGetTaskLists = async () => {
    try{
      await getTaskLists(currentProject.projectIdentifier);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    callGetTaskLists();
  }, []);

  return (
    <>
      <Helmet>
        <title>{title} | Tasks</title>
      </Helmet>
      {tasks ? (
        <>
          <TeamWorkHeader />
          <ProjectWorks tasks={tasks} />
        </>
      ) : (
        ""
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  currentProject: state.project.project
})

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(Works);
