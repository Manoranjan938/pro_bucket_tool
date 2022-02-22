import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";
import Login from "Screens/Login/Login";
import Forgot from "Screens/ForgotPassword/Forgot";
import Signin from "Screens/Signin/Signin";
import EmailVerify from "Screens/EmailVerify/EmailVerify";
import Error from "Screens/Error/Error";
import DashboardScreen from "Screens/Dashboard/DashboardScreen";
import Logout from "Screens/Logout/Logout";
import CreateProject from "Screens/CreateProject/CreateProject";
import { Provider } from "react-redux";
import store from "./store";
import setJWTToken from "Security/setJWTToken";
import jwtDecode from "jwt-decode";
import { SET_CURRENT_USER } from "Apis/Actions/types";
import { logout } from "Apis/Actions/securityActions";
import Projects from "Components/Projects/Projects";
import DasboardHome from "Screens/DashboardHome/DasboardHome";
import Works from "Screens/ProjectWorks/Works";
import Bugs from "Screens/BugDashboard/Bugs";
import Todos from "Screens/Todos/Todos";
import Notes from "Screens/Notes/Notes";

const jwtToken = localStorage.jwtToken;

if(jwtToken){
  setJWTToken(jwtToken);
  const decode = jwtDecode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decode
  })

  const currentTime = Date.now() / 1000;

  if(decode.exp < currentTime){
    store.dispatch(logout())
    window.location.href = "/login"
  }
}

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/verify-email" element={<EmailVerify />} />
          <Route path="/resetpassword" element={<Forgot />} />
          <Route
            path="/dashboard/*"
            element={
              <DashboardScreen>
                <Routes>
                  <Route path="/home" element={<DasboardHome />} />
                  <Route path="/works" element={<Works />} />
                  <Route path="/bug" element={<Bugs />} />
                  <Route path="/todos" element={<Todos />} />
                  <Route path="/notes" element={<Notes />} />
                </Routes>
              </DashboardScreen>
            }
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
