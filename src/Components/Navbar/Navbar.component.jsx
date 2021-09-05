import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navigation-bar">
      <Link to="/">Home</Link>
      <Link to="/signin">Sign In/Register</Link>
      <Link to="/admin">Admin</Link>
    </div>
  );
};

export default Navbar;

// <Link to="/admin/event/create">Create Events</Link>
//  <div className="admin-page">
//     <div className="link-list">
//       <ul>
//         <li>
//           <a href="#">Home</a>
//         </li>
//         <li>
//           <a href="#">Home</a>
//         </li>
//         <li>
//           <a href="#">Home</a>
//         </li>
//         <li>
//           <a href="#">Home</a>
//         </li>
//       </ul>
//     </div>
//     <div className="signin-div">
//       <ul>
//         <li>
//           <a href="#">Sign in</a>
//         </li>
//         <li>
//           <a href="#">Register</a>
//         </li>
//       </ul>
//     </div>
//   </div>
//   <div className="logo">
//     <a href="#">WaterStone</a>
//   </div>

//   <div className="second-bar">
//     <div className="second-links">
//       <ul>
//         <li>
//           <a href="#">NEW</a>
//         </li>
//         <li>
//           <a href="#">NEW</a>
//         </li>
//         <li>
//           <a href="#">NEW</a>
//         </li>
//         <li>
//           <a href="#">NEW</a>
//         </li>
//         <li>
//           <a href="#">NEW</a>
//         </li>
//         <li>
//           <a href="#">NEW</a>
//         </li>
//       </ul>
//     </div>
//     <div className="search-div">
//       <input type="text" placeholder="Title,author,keyword" />
//     </div>
//   </div>
