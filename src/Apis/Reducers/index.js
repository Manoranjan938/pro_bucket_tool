import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import securityReducers from "./securityReducers";

export default combineReducers({
    error: errorReducer,
    security: securityReducers
})