import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
// import { TextField } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";

import "./Navbar.css";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "none",
//     "@media (max-width: 800px)": {
//       "& .MuiIconButton-root": {
//         display: "block",
//       },
//     },
//   },
// }));

const Navbar = (props) => {
  const history = useHistory();
  const login = props.login;
  const [openMenu, setOpenMenu] = useState(false);

  const [width, setWidth] = useState(651);

  let handleClick = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      console.log("updating width");
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  useEffect(() => {
    if (width > 650) {
      handleClick = () => {
        setOpenMenu(false);
      };
    } else {
      handleClick = () => {
        setOpenMenu(!openMenu);
      };
    }
  }, [width]);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    history.push("/");

    history.go();
  };
  return (
    <div className={openMenu && width < 650 ? "nav-bar no-scroll" : "nav-bar"}>
      <div className="admin-page">
        <span className="menu-icon">
          <IconButton onClick={handleClick}>
            {openMenu ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </span>
        <div className={openMenu ? "link-list active" : "link-list"}>
          <ul>
            <li className="nav-item">
              <Link className="nav-links" to="/" onClick={handleClick}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/AboutUs" onClick={handleClick}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/asdasdss" onClick={handleClick}>
                Contact us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/asdasd" onClick={handleClick}>
                Location
              </Link>
            </li>
            {login ? (
              <li className="nav-item">
                <Link
                  className="nav-links"
                  to="/Wishlist"
                  onClick={handleClick}
                >
                  <FavoriteIcon />
                </Link>
              </li>
            ) : null}
          </ul>
        </div>
        <div className="signin-div">
          {login ? (
            <ul>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/signin">Sign in</Link>
              </li>
              <li>
                <Link to="/signin">Register</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="logo">
        <h3>Mybrary</h3>
      </div>

      <div className="second-bar">
        <div className="search-div"></div>
      </div>
    </div>
  );
};

export default Navbar;

//  <TextField
//    variant="outlined"
//    label="Search a book"
//    InputProps={{
//      endAdornment: (
//        <InputAdornment>
//          <IconButton>
//            <SearchIcon />
//          </IconButton>
//        </InputAdornment>
//      ),
//    }}
//  />;

// <li href="#">Mybrary</li>;
