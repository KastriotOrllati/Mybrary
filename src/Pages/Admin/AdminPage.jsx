import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./AdminPage.css";

import CreateBook from "../../AdminComponents/CreateBook/CreateBook.component";
import CreateCategory from "../../AdminComponents/CreateCategory/CreateCategory";
import EditBook from "../../AdminComponents/EditBook/EditBook.component";
import AllBooks from "../../AdminComponents/AllBooks/AllBooks.component";
import SideMenu from "./Side-menu/SideMenu";
import AllCategories from "../../AdminComponents/AllCategorys/AllCategories";

const AdminPage = () => {
  return (
    <div>
      <Router>
        <SideMenu />

        <Route path="/admin/create">
          <CreateBook />
        </Route>
        <div className="route">
          <Switch>
            <Route path="/admin/book/edit/:slug">
              <EditBook />
            </Route>
            <Route path="/admin/allbooks">
              <AllBooks />
            </Route>
            <Route path="/admin/category">
              <CreateCategory />
            </Route>
            <Route path="/admin/all-categories">
              <AllCategories />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default AdminPage;
