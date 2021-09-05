import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

function ReusableForm(props) {
  //   const editBook = props;
  const initialFieldsValue = props.initialFieldsValue;
  const defaultImageSrc = props.defaultImageSrc;
  const [values, setValues] = useState(initialFieldsValue);
  const [, setErrors] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:39068/api/Categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, [setCategories]);

  // useEffect(() => {
  //     fetch()
  // })

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();
      formData.append("titulli", values.titulli);
      formData.append("autori", values.autori);
      formData.append("ISBN", values.ISBN);
      formData.append("cmimi", values.cmimi);
      formData.append("nrFaqes", values.nrFaqes);
      formData.append("stock", values.stock);
      formData.append("imageName", values.imageName);
      formData.append("imageFile", values.imageFile);
      formData.append("category", values.category);
      // for (var pair of formData.entries()) {
      //   console.log(pair);
      // }

      fetch("http://localhost:39068/api/Libra", {
        method: "POST",
        body: formData,
      })
        .then((res) => console.log(res))
        .then(resetForm())
        .catch((err) => console.log(err));
    }
  };
  const resetForm = () => {
    setValues(initialFieldsValue);
    document.getElementById("image-uploader").value = null;
    setErrors({});
  };

  const validate = () => {
    let temp = {};
    temp.titulli = values.titulli === "" ? false : true;
    temp.imageSrc = values.imageSrc === defaultImageSrc ? false : true;

    setErrors(temp);

    return Object.values(temp).every((x) => x === true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const showPreview = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setValues({
          ...values,
          imageFile,
          imageSrc: x.target.result,
        });
      };
      reader.readAsDataURL(imageFile);
    } else {
      setValues({
        ...values,
        imageFile: null,
        imageSrc: defaultImageSrc,
      });
    }
  };

  return (
    <div>
      <form
        className="formStyle"
        onSubmit={handleSubmit}
        autoComplete="off"
        noValidate
      >
        <img src={values.imageSrc} alt={values.imageName} />
        <input
          type="file"
          accept="image/*"
          id="image-uploader"
          onChange={showPreview}
        />
        <TextField
          label="Titulli"
          inputProps={{ "aria-label": "name" }}
          className="input"
          value={values.titulli}
          name="titulli"
          onChange={handleInputChange}
          id="standard-basic"
        />
        <TextField
          label="Autori"
          inputProps={{ "aria-label": "name" }}
          className="input"
          value={values.autori}
          name="autori"
          onChange={handleInputChange}
          id="standard-basic"
        />
        <FormControl>
          <InputLabel htmlFor="category">Category</InputLabel>
          <Select
            native
            value={values.category}
            onChange={handleInputChange}
            inputProps={{
              name: "category",
              id: "category",
            }}
          >
            <option aria-label="None" value="" />
            {categories.map((category) => (
              <option value={category.categories} key={category.id}>
                {category.categories}
              </option>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Cmimi"
          inputProps={{ "aria-label": "name" }}
          className="input"
          value={values.cmimi}
          name="cmimi"
          onChange={handleInputChange}
          id="standard-basic"
        />
        <TextField
          label="ISBN"
          inputProps={{ "aria-label": "name" }}
          className="input"
          value={values.ISBN}
          name="ISBN"
          onChange={handleInputChange}
          id="standard-basic"
        />
        <TextField
          label="Nr i faqeve"
          inputProps={{ "aria-label": "name" }}
          className="input"
          value={values.nrFaqes}
          name="nrFaqes"
          onChange={handleInputChange}
          id="standard-basic"
        />
        <TextField
          label="Stock"
          inputProps={{ "aria-label": "name" }}
          className="input"
          value={values.stock}
          name="stock"
          onChange={handleInputChange}
          id="standard-basic"
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          className="buttonCreate"
        >
          Add Book
        </Button>
      </form>
    </div>
  );
}

export default ReusableForm;
