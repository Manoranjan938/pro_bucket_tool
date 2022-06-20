import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import securityReducers from "./securityReducers";
import projectReducers from "./projectReducers";

export default combineReducers({
  error: errorReducer,
  security: securityReducers,
  project: projectReducers,
});
