import { TextField } from "@material-ui/core";
import React from "react";

export default function CreateCategory() {
  const onChangeHandler = () => {};

  const onSubmitHandler = () => {};

  return (
    <div>
      <TextField
        variant="filled"
        size="medium"
        margin="normal"
        label="add-category"
        name="add-category"
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
}
