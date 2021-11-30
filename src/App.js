import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from './Screens/Home/Home'
import Login from "Screens/Login/Login";
import Forgot from "Screens/ForgotPassword/Forgot";
import Signin from "Screens/Signin/Signin";
import EmailVerify from "Screens/EmailVerify/EmailVerify";
import Error from "Screens/Error/Error";
import DashboardScreen from "Screens/Dashboard/DashboardScreen";
import Logout from "Screens/Logout/Logout";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/verify-email" element={<EmailVerify />} />
        <Route path="/resetpassword" element={<Forgot />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
