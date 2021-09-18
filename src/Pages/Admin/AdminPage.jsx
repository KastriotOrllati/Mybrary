import React from "react";
import { Route, Switch } from "react-router";
import "./AdminPage.css";

import CreateBook from "../../AdminComponents/CreateBook/CreateBook.component";
import CreateCategory from "../../AdminComponents/CreateCategory/CreateCategory";
import EditBook from "../../AdminComponents/EditBook/EditBook.component";
import AllBooks from "../../AdminComponents/AllBooks/AllBooks.component";
import SideMenu from "./Side-menu/SideMenu";

const AdminPage = () => {
  return (
    <div>
      <SideMenu />
      <h1>Welcome to admin dashboard!</h1>
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
        </Switch>
      </div>
    </div>
  );
};

export default AdminPage;
