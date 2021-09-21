import React from "react";
import "../../App.css";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import BookView from "../../Components/BookView/BookView.component";
// import AllCategoryBooks from "../../Components/CategoryBooks/AllCategoryBooks";
import BookList from "../../Components/BookList/BookList.component";

function Homepage(props) {
  console.log("From homepage");
  return (
    <div className="homepage">
      <BookList bookCategory="Crime" />
      <BookList bookCategory="Fantasy" />
      <BookList bookCategory="Classic" />
      <BookList bookCategory="History" />
      <BookList bookCategory="Bussines" />
      <BookList bookCategory="Animated" />
    </div>
  );
}

export default Homepage;

// <Route path="/books/category/:ctg">
//   <AllCategoryBooks />
// </Route>

//   // <BookView />
// </Route>
