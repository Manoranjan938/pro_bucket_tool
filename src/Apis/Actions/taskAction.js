import { SET_SINGLE_TASK, SET_TASK_LISTS } from "./types";

export const getAllTask = (taskList) => (dispatch) => {
  dispatch({
    type: SET_TASK_LISTS,
    payload: taskList,
  });
};

export const getSingleTask = (task) => (dispatch) => {
  dispatch({
    type: SET_SINGLE_TASK,
    payload: task,
  });
};
