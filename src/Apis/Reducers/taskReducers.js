import { SET_TASK_LISTS, SET_SINGLE_TASK } from "apis/Actions/types";

const initialState = {
  allTask: [],
  selectedTask: {},
};

const setAllTasks = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASK_LISTS:
      return {
        ...state,
        allTask: action.payload,
      };

    case SET_SINGLE_TASK:
      return {
        ...state,
        selectedTask: action.payload,
      };

    default:
      return state;
  }
};

export default setAllTasks;
