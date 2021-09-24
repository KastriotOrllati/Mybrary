import React from "react";
import "../../App.css";
import "./Homepage.css";
import BookList from "../../Components/BookList/BookList.component";
import { Link } from "react-router-dom";
import FrontImage from "../../Assets/frontImage.jpeg";

function Homepage(props) {
  console.log("From homepage");
  return (
    <div className="homepage">
      <BookList bookCategory="Crime" key={"Crime"} />
      <BookList bookCategory="Fantasy" key={"Fantasy"} />
      <BookList bookCategory="Classic" key={"Classic"} />
      <BookList bookCategory="History" key={"History"} />
      <div className="front-image">
        <a href="http://localhost:3000/book/25" className="front-image-link ">
          View Book
        </a>
        <img src={FrontImage} alt="" />
      </div>
      <BookList bookCategory="Bussines" key={"Bussines"} />
      <BookList bookCategory="Animated" key={"Animated"} />
    </div>
  );
}

export default Homepage;
