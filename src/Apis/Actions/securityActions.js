import jwt_decode from "jwt-decode";
import setJWTToken from "Security/setJWTToken";
import axios from "Services/axios";
import { SET_CURRENT_USER } from "./types";

export const login = (LoginRequest) => async (dispatch) => {
  try {
    const res = await axios.post("/auth/login", LoginRequest);

    const { token } = res.data;
    localStorage.setItem("jwtToken", token);
    setJWTToken(token);
    const decoded = jwt_decode(token);

    dispatch({
      type: SET_CURRENT_USER,
      payload: decoded,
    });
  } catch (err) {
    console.log(err);
    /*dispatch({
      type: SET_ERRORS,
      payload: err.data,
    });*/
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  setJWTToken(false);
  dispatch({
    type: SET_CURRENT_USER,
    payload: {},
  });
};
