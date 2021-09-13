import React from "react";
import { Route, Switch } from "react-router";

import CreateBook from "../../AdminComponents/CreateBook/CreateBook.component";
import CreateCategory from "../../AdminComponents/CreateCategory/CreateCategory";
import EditBook from "../../AdminComponents/EditBook/EditBook.component";
import SideMenu from "./Side-menu/SideMenu";

const AdminPage = () => {
  return (
    <div>
      <SideMenu />
      <h1>Welcome to admin dashboard!</h1>
      <Route path="/admin/create">
        <CreateBook />
      </Route>
      <Switch>
        <Route path="/admin/book/edit/:slug">
          <EditBook />
        </Route>
        <Route path="/admin/category">
          <CreateCategory />
        </Route>
      </Switch>
    </div>
  );
};

export default AdminPage;
