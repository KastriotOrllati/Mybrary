import React from "react";
// import { Button, TextField } from "@material-ui/core";
// import InputLabel from "@material-ui/core/InputLabel";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
import "./CreateBook.css";
import ReusableForm from "../ReusableForm/ReusableForm.component";

const defaultImageSrc = "https://www.picniq.co.uk/images/addphoto.png";

const initialFieldsValue = {
  titulli: "",
  autori: "",
  ISBN: 0,
  cmimi: 0,
  nrFaqes: 0,
  stock: 0,
  category: "",
  imageName: "",
  imageSrc: defaultImageSrc,
  imageFile: null,
};

function CreateBook() {
  return (
    <div className="createBook">
      <h1>hello from create</h1>

      <ReusableForm
        initialFieldsValue={initialFieldsValue}
        defaultImageSrc={defaultImageSrc}
      />
    </div>
  );
}

export default CreateBook;
