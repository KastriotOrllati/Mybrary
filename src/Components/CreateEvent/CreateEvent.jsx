import React, { useState } from "react";
import { Button, TextField, Input } from "@material-ui/core";
import "./CreateEvent.css";

function CreateEvent() {
  const [name, setName] = useState("");
  const [host, setHost] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = { name, host, description };

    fetch("http://localhost:5000/event/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    });
  };

  return (
    <div className="createEventBody">
      <h1>hello from create</h1>

      <form className="formStyle" onSubmit={handleSubmit}>
        <Input
          placeholder="Name"
          inputProps={{ "aria-label": "name" }}
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Host"
          inputProps={{ "aria-label": "host" }}
          className="input"
          value={host}
          onChange={(e) => setHost(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="description"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">
          Add Event
        </Button>
      </form>
    </div>
  );
}

export default CreateEvent;
