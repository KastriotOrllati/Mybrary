import React, { useEffect, useState } from "react";
import "../../App.css";
import "./Homepage.css";
import BookList from "../../Components/BookList/BookList.component";

import FrontImage from "../../Assets/frontImage.jpeg";

function Homepage(props) {
  console.log("From homepage");

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:39068/api/Categories/")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="homepage">
      <div className="front-image">
        <a href="http://localhost:3000/book/25" className="front-image-link ">
          View Book
        </a>
        <img src={FrontImage} alt="" />
      </div>
      {categories.map((category) => (
        <BookList bookCategory={category.categories} key={category.id} />
      ))}
    </div>
  );
}

export default Homepage;

//  <BookList bookCategory="Crime" key={"Crime"} />
//     <BookList bookCategory="Fantasy" key={"Fantasy"} />
//     <BookList bookCategory="Classic" key={"Classic"} />
//     <BookList bookCategory="History" key={"History"} />
// <div className="front-image">
//   <a href="http://localhost:3000/book/25" className="front-image-link ">
//     View Book
//   </a>
//   <img src={FrontImage} alt="" />
// </div>
//     <BookList bookCategory="Bussines" key={"Bussines"} />
//     <BookList bookCategory="Animated" key={"Animated"} />
