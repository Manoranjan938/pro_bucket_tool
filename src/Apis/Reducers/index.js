import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import securityReducers from "./securityReducers";
import projectReducers from "./projectReducers";
import taskReducers from "./taskReducers";
import teamMembers from "./teamReducers";

export default combineReducers({
  error: errorReducer,
  security: securityReducers,
  project: projectReducers,
  tasks: taskReducers,
  teams: teamMembers,
});
