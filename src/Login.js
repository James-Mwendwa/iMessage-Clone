import { Button } from '@mui/material';
import React from 'react';
import './Login.css';

import  { auth, provider } from './Firebase';
import { signInWithPopup } from "firebase/auth";




function Login() {

  const signIn = () => {
    signInWithPopup(auth, provider)
    .catch((error) => console.log(error));

  }


  return (
    <div className='login'>
      <div className="login-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png" 
        alt="iMessage Logo" />

        <h1>iMessage</h1>
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login;