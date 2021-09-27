import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import "./CreateCategory.css";

export default function CreateCategory() {
  const [categories, setCategories] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const category = { categories };
    fetch("http://localhost:39068/api/Categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(category),
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div>
      <h1 className="h1">Create Category</h1>
      <form className="form-create-cat" onSubmit={handleSubmit}>
        <TextField
          variant="filled"
          size="medium"
          margin="normal"
          name="addCategory"
          onChange={(e) => setCategories(e.target.value)}
        />

        <button className="create-cat-button" type="submit">
          Add Category
        </button>
      </form>
    </div>
  );
}
