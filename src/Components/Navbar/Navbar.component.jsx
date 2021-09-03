import { Link, withRouter } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="admin-page">
      <div className="navigation-bar">
        <Link to="/">Home</Link>
        <Link to="/signin">Sign In/Register</Link>
      </div>
    </div>
  );
};

export default Navbar;

// <Link to="/admin/events">Events</Link>
// <Link to="/admin/event/create">Create Events</Link>
