import axios from "Services/axios";
import { SET_ALL_PROJECTS, SET_PROJECT_DETAILS } from "./types";

export const getAllProjects = (userId) => async (dispatch) => {
  try {
    const token = localStorage.getItem("jwtToken");
    const res = await axios.get(`/project/getProjects/${userId}`, {
      headers: { Authorization: token },
    });
    const projectData = res.data;

    dispatch({
      type: SET_ALL_PROJECTS,
      payload: projectData,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getProjectDetails = (projectId) => async (dispatch) => {
  try {
    const token = localStorage.getItem("jwtToken");
    const res = await axios.get(`/project/getProjectDetails/${projectId}`, {
      headers: { Authorization: token },
    });
    const projectDetails = res.data;

    dispatch({
      type: SET_PROJECT_DETAILS,
      payload: projectDetails,
    });
  } catch (err) {
    console.log(err);
  }
};
