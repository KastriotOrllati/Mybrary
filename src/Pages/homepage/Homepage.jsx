import React from "react";
import "../../App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BookView from "../../Components/BookView/BookView.component";
import BookList from "../../Components/BookList/BookList.component";

function Homepage(props) {
  return (
    <div className="homepage">
      <Route exact path="/">
        <BookList bookCategory="History" />
        <BookList bookCategory="bussines" />
        <BookList bookCategory="Animuar" />
      </Route>
      <Switch>
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
