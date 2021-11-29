import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from './Screens/Home/Home'
import Login from "Screens/Login/Login";
import Forgot from "Screens/ForgotPassword/Forgot";
import Signin from "Screens/Signin/Signin";
import EmailVerify from "Screens/EmailVerify/EmailVerify";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/verify-email" element={<EmailVerify />} />
        <Route path="/resetpassword" element={<Forgot />} />
      </Routes>
    </div>
  );
}

export default App;
