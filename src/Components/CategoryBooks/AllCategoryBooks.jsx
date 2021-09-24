import React from "react";
import { Route, Switch } from "react-router";
import CategoryBooks from "./CategoryBooks.component";

export default function AllCategoryBooks() {
  return (
    <div>
      <Switch>
        <Route path="/books/category/History">
          <CategoryBooks bookCategory="History" />
        </Route>
        <Route path="/books/category/Bussines">
          <CategoryBooks bookCategory="Bussines" />
        </Route>
        <Route path="/books/category/Animated">
          <CategoryBooks bookCategory="Animated" />
        </Route>
        <Route path="/books/category/Classic">
          <CategoryBooks bookCategory="Classic" />
        </Route>
        <Route path="/books/category/Fantasy">
          <CategoryBooks bookCategory="Fantasy" />
        </Route>
        <Route path="/books/category/Crime">
          <CategoryBooks bookCategory="Crime" />
        </Route>
      </Switch>
    </div>
  );
}
