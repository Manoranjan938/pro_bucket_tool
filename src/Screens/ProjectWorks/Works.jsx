import Button from "Components/Button/Button";
import DataNotFound from "Components/DataError/DataNotFound";
import NewTask from "Components/NewTask/NewTask";
import TeamWorkHeader from "Components/TeamWorkHeader/TeamWorkHeader";
import ProjectWorks from "Components/Works/ProjectWorks";
import useGetTaskLists from "hooks/useGetTaskLists";
import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { compose } from "redux";

import "./works.css";

const Works = ({ title, currentProject }) => {
  const [tasks, getTaskLists] = useGetTaskLists();
  const [show, setShow] = useState(false);

  const callGetTaskLists = async () => {
    try {
      await getTaskLists(currentProject.projectIdentifier);
    } catch (err) {
      //console.log(err);
    }
  };

  useEffect(() => {
    callGetTaskLists();
  }, []);

  const handleOpenTask = () => {
    setShow(!show);
  };

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
        <>
          <DataNotFound text="No Tasks are there... Click the Button below to create a task." />
          <div className="task_create_btn" onClick={handleOpenTask}>
            <Button title="Create Task" />
          </div>
        </>
      )}

      {show && <NewTask open={show} setOpen={setShow} />}
    </>
  );
};

const mapStateToProps = (state) => ({
  currentProject: state.project.project,
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(Works);
