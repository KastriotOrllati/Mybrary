import { TextField } from "@material-ui/core";
import React, { useState } from "react";

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

  console.log(categories);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="filled"
          size="medium"
          margin="normal"
          label="add-category"
          name="addCategory"
          onChange={(e) => setCategories(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
