import React, { useState } from "react";
import "./Login.css";

import image from "Images/logo.png";
import googleImage from "Images/google-logo.png";
import { Link } from "react-router-dom";
import { GOOGLE_AUTH_URL } from "Constant/constant";
import MuiAlert from '@mui/material/Alert'
import { Snackbar } from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref){
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    showEmail: false,
    showPassword: false,
    message: ''
  })
  const [statusBar, setStatusBar] = useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'right',
    type: '',
    message: ''
  });

  //const navigate = useNavigate();

  const handleClose = (event, reason) => {
    if(reason === 'clickaway'){
      return;
    }
    setStatusBar({open: false});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email && !password){
      setError({
        showEmail: true,
        showPassword: true,
        message: '**Please fill out this field'
      })
    }
    else if(!email){
      setError({
        showEmail: true,
        showPassword: false,
        message: '**Please fill out this field'
      })
    }
    else if(!password){
      setError({
        showEmail: false,
        showPassword: true,
        message: '**Please fill out this field'
      })
    }
    else{
      setStatusBar({open: true, type: 'success', message: 'You have logged in successfully'});
    }
  };

  return (
    <div className="login_container">
      <div className="login__wrapper">
        <div className="login__header">
          <img src={image} alt="" />
          <span>ProBucket</span>
        </div>
        <div className="login__body">
          <div className="login__body__header">
            <span>Login to continue to:</span>
            <h5>Probucket</h5>
          </div>
          <div className="login__body__content">
            <input
              type="text"
              className="input__email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {error.showEmail && (
              <div className="error_msg">
                <span>{error.message}</span>
              </div>
            )}
            <input
              type="password"
              className="input__email"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {error.showPassword && (
              <div className="error_msg">
                <span>{error.message}</span>
              </div>
            )}

            <button className="login__btn" onClick={handleSubmit}>
              Continue
            </button>
            <span className="login_or">OR</span>
            <a className="login__btn__google" href={GOOGLE_AUTH_URL}>
              <img src={googleImage} alt="" />
              <span>Continue with Google</span>
            </a>
            <hr />
            <div className="links">
              <Link to="/resetpassword">Can't login?</Link>
              <Link to="/signin">Sign up for an account</Link>
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        open={statusBar.open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}
        key={statusBar.vertical + statusBar.horizontal}
      >
        <Alert onClose={handleClose} severity={statusBar.type} sx={{ width: "100%" }}>
          {statusBar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

// function mapDispatchToProps(dispatch) {
//   return {
//     getUsers: (data) => dispatch(login(data)),
//   };
// }

// const mapStateToProps = (state) => ({
//   security: state.security,
// });

// const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default Login;
