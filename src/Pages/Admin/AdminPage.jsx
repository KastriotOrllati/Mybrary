import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./AdminPage.css";

import CreateBook from "../../AdminComponents/CreateBook/CreateBook.component";
import EditBook from "../../AdminComponents/EditBook/EditBook.component";
import AllBooks from "../../AdminComponents/AllBooks/AllBooks.component";
import SideMenu from "./Side-menu/SideMenu";
import AllCategories from "../../AdminComponents/AllCategorys/AllCategories";
import AddAdmin from "../../AdminComponents/AddAdmin/AddAdmin";

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
            <Route path="/admin/all-categories">
              <AllCategories />
            </Route>
            <Route path="/admin/add-admin">
              <AddAdmin />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default AdminPage;
