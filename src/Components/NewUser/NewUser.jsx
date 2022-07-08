import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { getAllTeamMembers } from "apis/Actions/teamActions";
import CreateUser from "Components/CreateUser/CreateUser";
import useGetTeamMembersList from "hooks/useGetTeamMembersList";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import "./NewUser.css";

const NewUser = ({ currentProject, getTeamList }) => {
  const [teamList, getTeamLists] = useGetTeamMembersList();

  useEffect(() => {
    callGetTeamMembersList();
  }, []);

  const callGetTeamMembersList = async () => {
    await getTeamLists(currentProject.projectId);
  };

  useEffect(() => {
    getTeamList(teamList);
  }, [teamList]);

  return (
    <>
      <div className="new_user_container">
        <CreateUser />
        <div className="new_user_contents">
          <div className="new_user__header">
            <span className="user">User</span>
            <span className="last_active">Last Active</span>
            <span className="status">Status</span>
            <span className="role">Role</span>
            <span className="action">Action</span>
          </div>
          <div className="new_user__body">
            {teamList.map((item, index) => (
              <div className="new_user_row" key={index}>
                <div className="user user_names">
                  <Avatar sx={{ bgcolor: deepOrange[500] }}>
                    {item.name.substr(0, 1)}
                  </Avatar>
                  <div className="user_details">
                    <span className="user_name">{item.name}</span>
                    <p className="user_email">{item.email}</p>
                  </div>
                </div>
                <div className="last_active">
                  <span>21-05-2022</span>
                </div>
                <div className="status">
                  <span className="status_text">Active</span>
                </div>
                <div className="role">
                  <span>Not Added</span>
                </div>
                <div className="action">
                  <span>Show Details</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getTeamList: (data) => dispatch(getAllTeamMembers(data)),
  };
}

const mapStateToProps = (state) => ({
  currentProject: state.project.project,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(NewUser);
