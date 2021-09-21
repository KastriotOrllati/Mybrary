import React from "react";

import Login from "../../Components/Login/Login.component";
import Register from "../../Components/Register/Register.component";

import "./SigninRegister.css";

const SignRegister = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Login />
      <Register />
    </div>
  );
};

export default SignRegister;
