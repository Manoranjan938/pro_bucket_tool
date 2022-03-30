import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signin.css";
import MuiAlert from '@mui/material/Alert'

import image from "Images/logo.png";
import { Snackbar } from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref){
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const Signup = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [validError, setValidError] = useState({
    showEmail: false,
    showName: false,
    message: ''
  })
  const [notiBar, setNotiBar] = useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'right',
    type: '',
    message: ''
  });

  const handleClose = (event, reason) => {
    if(reason === 'clickaway'){
      return;
    }
    setNotiBar({open: false});
  }

  const handleContinue = (e) => {
    e.preventDefault();
    if(!email && !name){
      setValidError({
        showEmail: true,
        showName: true,
        message: '**Please fillout this field'
      })
    }
    else if(!email){
      setValidError({
        showEmail: true,
        showName: false,
        message: '**Please fillout this field'
      })
    }
    else if(!name){
      setValidError({
        showEmail: false,
        showName: true,
        message: '**Please fillout this field'
      })
    }
    else{
      setValidError({
        showEmail: false,
        showName: false,
        message: ''
      })
      setNotiBar({
        open: true, 
        type: 'success', 
        message: 'You have registered successfully'
      })
      setEmail('')
      setName('')
    }
  }

  return (
    <div className="signin_container">
      <div className="signin__wrapper">
        <div className="signin__header">
          <img src={image} alt="" />
          <span>ProBucket</span>
        </div>
        <div className="signin__body">
          <div className="signin__body__header">
            <span>Sign up for your account</span>
          </div>
          <div className="signin__body__content">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input__email"
              placeholder="Enter email"
            />

            {validError.showEmail ? (
              <div className="error_msg">
                <span>{validError.message}</span>
              </div>
            ) : null}

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input__email"
              placeholder="Enter full name"
            />

            {validError.showName ? (
              <div className="error_msg">
                <span>{validError.message}</span>
              </div>
            ) : null}

            <button className="signin__btn" onClick={handleContinue}>Continue</button>
            <span className="signin_or">OR</span>
            <button className="signin__btn__google">
              Continue with Google
            </button>
            <hr />
            <div className="signin_links">
              <Link to="/login">Already have an account? Login</Link>
            </div>
          </div>
        </div>
      </div>

      <Snackbar
        open={notiBar.open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}
        key={notiBar.vertical + notiBar.horizontal}
      >
        <Alert onClose={handleClose} severity={notiBar.type} sx={{ width: "100%" }}>
          {notiBar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Signup;
