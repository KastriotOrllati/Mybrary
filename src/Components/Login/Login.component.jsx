import { Button } from "@material-ui/core";
import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import "./Login.css";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [responseData, setResponseData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const login = { email, password };
    fetch("http://localhost:39068/api/User/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login),
    })
      .then((res) => res.json())
      .then((data) => {
        // setResponseData(data);
        if (data.title !== "Unauthorized") {
          localStorage.setItem("user", JSON.stringify(data));
          history.push("/");
          history.go();
        }
      }).catch = (err) => {
      console.log(err);
    };
  };

  // const handleLogout = (e) => {
  //   e.preventDefault();
  //   localStorage.removeItem("user");
  // };

  return (
    <div className="login">
      <h3>Sign In</h3>
      <form onSubmit={handleSubmit} className="loginForm">
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
          SIGN IN
        </Button>
      </form>
    </div>
    //   <Button variant="contained" type="submit" onClick={handleLogout}>
    //     Logout
    //   </Button>
  );
}

export default Login;
