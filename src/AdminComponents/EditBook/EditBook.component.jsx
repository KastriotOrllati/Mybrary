import React, { useState, useLayoutEffect } from "react";
import { useParams } from "react-router";
import "./EditBook.css";
import ReusableForm from "../ReusableForm/ReusableForm.component";

function EditBook() {
  let { slug } = useParams();
  const [initialFieldsValue, setInitialFieldsValue] = useState({});

  useLayoutEffect(() => {
    fetch(`http://localhost:39068/api/Libra/${slug}`)
      .then((res) => res.json())
      .then((data) => setInitialFieldsValue(data))
      .catch((err) => console.log(err));
  }, [slug]);

  //   console.log(initialFieldsValue);
  //   let o = Object.fromEntries(
  //     Object.entries(initialFieldsValue).filter(([_, v]) => v != null)
  //   );
  return (
    <div className="editBook">
      <h1>hello from Edit</h1>
      <ReusableForm
        initialFieldsValue={initialFieldsValue}
        defaultImageSrc={initialFieldsValue.imageName}
        editBook={true}
      />
    </div>
  );
}

export default EditBook;
