import { Avatar, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { getAllTeamMembers } from "apis/Actions/teamActions";
import CreateUser from "Components/CreateUser/CreateUser";
import useGetTeamMembersList from "hooks/useGetTeamMembersList";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { compose } from "redux";

import "./NewUser.css";

const NewUser = ({ getTeamList }) => {
  const [teamList, getTeamLists] = useGetTeamMembersList();
  const [showTaskModal, setShowTaskModal] = useState(false);

  let { search } = useLocation();

  const query = new URLSearchParams(search);
  const name = query.get("project");

  const handleTaskModal = () => {
    setShowTaskModal(true);
  };

  const handleClose = () => {
    setShowTaskModal(false);
  };

  useEffect(() => {
    callGetTeamMembersList();
  }, []);

  const callGetTeamMembersList = async () => {
    await getTeamLists(name);
  };

  useEffect(() => {
    getTeamList(teamList);
  }, [teamList]);

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}`,
    };
  }

  return (
    <>
      <div className="new_user_container">
        <CreateUser />
        <div className="new_user_contents">
          <div className="new_user__header">
            <span className="user">User</span>
            <span className="last_active">Added On</span>
            <span className="status">Status</span>
            <span className="role">Role</span>
            <span className="action">Action</span>
          </div>
          <div className="new_user__body">
            {teamList.map((item, index) => (
              <div className="new_user_row" key={index}>
                <div className="user user_names">
                  <Avatar {...stringAvatar(item.name)} />
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
                <div className="action actn_btn" onClick={handleTaskModal}>
                  <span>Edit Details</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal
        open={showTaskModal}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <div className="task_status_container">
          <div className="task_status_header">
            <h4>Update Assignee and Priority</h4>
            <i className="fa fa-times-circle-o" onClick={handleClose} />
          </div>
          <div className="divider" />
          <div className="task_status_body">
            <TextField
              fullWidth
              id="outlined-basic"
              label="Member Role"
              variant="outlined"
            />
            <FormControl fullWidth className="fields">
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Priority"
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="In-Active">In-Active</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" color="primary">
              Update
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getTeamList: (data) => dispatch(getAllTeamMembers(data)),
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(NewUser);
