import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles, TextField } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import "./Navbar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "none",
    "@media (max-width: 800px)": {
      "& .MuiIconButton-root": {
        display: "block",
      },
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="nav-bar">
      <div className="admin-page">
        <span className="menu-icon">
          <IconButton onClick={handleClick}>
            {openMenu ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </span>
        <div className={openMenu ? "link-list active" : "link-list"}>
          <ul>
            <li className="nav-item">
              <Link className="nav-links" to="/ " onClick={handleClick}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/" onClick={handleClick}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/" onClick={handleClick}>
                Contact us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/" onClick={handleClick}>
                Location
              </Link>
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
        <Link href="#">Mybrary</Link>
      </div>

      <div className="second-bar">
        <div className="search-div">
          <TextField
            variant="outlined"
            label="Search a book"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
