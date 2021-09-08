import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="admin-page">
        <div className="link-list">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
        <div className="signin-div">
          <ul>
            <li>
              <Link to="/signin">Sign in</Link>
            </li>
            <li>
              <Link to="/signin">Register</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="logo">
        <Link href="#">WaterStone</Link>
      </div>

      <div className="second-bar">
        <div className="second-links">
          <ul>
            <li>
              <Link to="/">NEW</Link>
            </li>
            <li>
              <Link to="/">NEW</Link>
            </li>
            <li>
              <Link to="/">NEW</Link>
            </li>
            <li>
              <Link to="/">NEW</Link>
            </li>
            <li>
              <Link to="/">NEW</Link>
            </li>
            <li>
              <Link to="/">NEW</Link>
            </li>
          </ul>
        </div>
        <div className="search-div">
          <input type="text" placeholder="Title,author,keyword" />
        </div>
      </div>
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
