import React from "react";
import "../../App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BookView from "../../Components/BookView/BookView.component";
import BookList from "../../Components/BookList/BookList.component";
import AllCategoryBooks from "../../Components/CategoryBooks/AllCategoryBooks";

function Homepage(props) {
  console.log("From homepage");
  return (
    <div className="homepage">
      <Route exact path="/">
        <BookList bookCategory="History" />
        <BookList bookCategory="Bussines" />
        <BookList bookCategory="Animated" />
      </Route>
      <Switch>

        <Route path="/book/:slug">
          <BookView />
        </Route>
        <Route path="/books/category/:ctg">
          <AllCategoryBooks />
        </Route>

        <Router>
          <Route path="/book/:slug">
            <BookView />
          </Route>
        </Router>

      </Switch>
    </div>
  );
}

export default Homepage;
