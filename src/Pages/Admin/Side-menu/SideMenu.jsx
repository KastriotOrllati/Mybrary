import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Sidemenu.css";

import { authHeader } from "../../../Utils/authHeader";
import { getUser } from "../../../Utils/getUser";

export default function SideMenu() {
  const history = useHistory();
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    let response = authHeader();

    if (response.Authorization) {
      setLogin(true);
    }
    let user = getUser();
    setUser(user);
    console.log("Side menu login");
  }, [login]);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    history.push("/");

    history.go();
  };

  return (
    <div className="side-menu">
      <div className="menu-container">
        <h3>Books</h3>
        <div className="links">
          <Link to="/admin/allbooks">All Books</Link>
          <Link to="/admin/create">Create a book</Link>
        </div>
        <h3>Category</h3>
        <div className="links">
          <Link to="/admin/all-categories">All Categorys</Link>
        </div>
        <h3>Admin</h3>
        <div className="links">
          <Link to="/admin/add-admin">Add Admin</Link>
        </div>
        {login ? (
          <div className="log-out">
            <button onClick={handleLogout}>LogOut</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

// <Link to="/admin/book/edit/:slug">Edit Book</Link>
