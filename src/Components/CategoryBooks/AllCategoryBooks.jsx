import React from "react";
import { Route, Switch } from "react-router";
import CategoryBooks from "./CategoryBooks.component";

export default function AllCategoryBooks() {
  return (
    <div>
      <Switch>
        <Route exact path="/books/category/History">
          <CategoryBooks bookCategory="History" />
        </Route>
        <Route exact path="/books/category/Bussines">
          <CategoryBooks bookCategory="Bussines" />
        </Route>
        <Route exact path="/books/category/Animated">
          <CategoryBooks bookCategory="Animated" />
        </Route>
      </Switch>
    </div>
  );
}
