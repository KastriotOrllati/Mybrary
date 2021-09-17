import React from "react";
import "../../App.css";

import { Route, Switch } from "react-router-dom";

import BookView from "../../Components/BookView/BookView.component";
import BookList from "../../Components/BookList/BookList.component";

function Homepage(props) {
  return (
    <div className="homepage">
      <Route exact path="/">
        <BookList />
      </Route>
      <Switch>
        <Route path="/book/:slug">
          <BookView />
        </Route>
      </Switch>
    </div>
  );
}

export default Homepage;
