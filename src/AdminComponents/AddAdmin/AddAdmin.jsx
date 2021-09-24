import { Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import "../../Components/Register/Register.css";
import "./AddAdmin.css";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 20,
  },
}));

function AddAdmin() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  //   const [responseData, setResponseData] = useState({});

  const handleSubmit = (e) => {
    let user = JSON.parse(localStorage.getItem("user"));
    e.preventDefault();
    const register = { email, password, username };
    fetch("http://localhost:39068/api/Admin/AddRoleToUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${"Bearer " + user.token}`,
      },
      body: JSON.stringify(register),
    })
      .then((res) => res.json())
      .then((data) => {
        // setResponseData(data);
        localStorage.setItem("admin", JSON.stringify(data));
      });
  };

  return (
    <div className="add-admin-container">
      <h3>Add Admin</h3>
      <form onSubmit={handleSubmit} className="add-admin-form">
        <TextField
          className={classes.root}
          type="text"
          id="standard-basic"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          className={classes.root}
          type="text"
          id="standard-basic"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className={classes.root}
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

export default AddAdmin;
