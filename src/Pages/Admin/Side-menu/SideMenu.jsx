import React from "react";
import { Link } from "react-router-dom";
import "./Sidemenu.css";

export default function SideMenu() {
  return (
    <div className="side-menu">
      <div className="menu-container">
        <h1>Books</h1>
        <div className="links">
          <Link to="/admin/create">Create a book</Link>
          <Link to="/admin/create">Create a category</Link>
          <Link to="/admin/allbooks">All Books</Link>
        </div>
        <h1>Category</h1>
        <div className="links">
          <Link to="/admin/category">Create a category</Link>
          <Link to="/admin/create">All Categorys</Link>
        </div>
      </div>
    </div>
  );
}
