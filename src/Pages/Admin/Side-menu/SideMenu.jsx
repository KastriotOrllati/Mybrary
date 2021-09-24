import React from "react";
import { Link } from "react-router-dom";
import "./Sidemenu.css";

export default function SideMenu() {
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
      </div>
    </div>
  );
}

// <Link to="/admin/book/edit/:slug">Edit Book</Link>
