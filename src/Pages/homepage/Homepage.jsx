import React from "react";
import "../../App.css";

import BookList from "../../Components/BookList/BookList.component";

function Homepage(props) {
  console.log("From homepage");
  return (
    <div className="homepage">
      <BookList bookCategory="Crime" key={"Crime"} />
      <BookList bookCategory="Fantasy" key={"Fantasy"} />
      <BookList bookCategory="Classic" key={"Classic"} />
      <BookList bookCategory="History" key={"History"} />
      <BookList bookCategory="Bussines" key={"Bussines"} />
      <BookList bookCategory="Animated" key={"Animated"} />
    </div>
  );
}

export default Homepage;
