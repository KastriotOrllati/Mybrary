import React from "react";
import { Route, Switch } from "react-router";

import CreateBook from "../../AdminComponents/CreateBook/CreateBook.component";
import EditBook from "../../AdminComponents/EditBook/EditBook.component";

const AdminPage = () => {
  return (
    <div>
      <h1>Welcome to admin dashboard!</h1>
      <Route path="/admin/create">
        <CreateBook />
      </Route>
      <Switch>
        <Route path="/admin/book/edit/:slug">
          <EditBook />
        </Route>
      </Switch>
    </div>
  );
};

export default AdminPage;
