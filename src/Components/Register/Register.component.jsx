import { Button } from "@material-ui/core";
import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  //   const [responseData, setResponseData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const register = { email, password, username };
    fetch("http://localhost:39068/api/User/Register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(register),
    })
      .then((res) => res.json())
      .then((data) => {
        // setResponseData(data);
        localStorage.setItem("user", JSON.stringify(data));
      });
  };

  return (
    <div className="register">
      <h3>Register</h3>
      <form onSubmit={handleSubmit} className="registerForm">
        <TextField
          type="text"
          id="standard-basic"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          type="text"
          id="standard-basic"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type="password"
          id="standard-basic"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className="login-button"
          variant="contained"
          color="primary"
          type="submit"
        >
          REGISTER
        </Button>
      </form>
    </div>
    //   <Button variant="contained" type="submit" onClick={handleLogout}>
    //     Logout
    //   </Button>
  );
}

export default Register;
