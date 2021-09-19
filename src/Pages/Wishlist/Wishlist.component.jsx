import React from "react";
import classes from "./Wishlist.module.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Rich from "../../Assets/rich.jpg";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "red",
    fontSize: "50px",
  },
}));

export default function Wishlist() {
  const style = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.products}>
        <span className={classes.productImage}>
          <img src={Rich} />
        </span>
        <span className={classes.productDetails}>
          <h2>Rich Dad poor Dad</h2>
          <h3>AuThor</h3>
          <small>Category</small>
        </span>
        <div className={classes.productSecond}>
          <span className={classes.productPrice}>
            <p>$15.00</p>
          </span>
          <span className={classes.productButton}>
            <button>ADD TO BASKET</button>
          </span>
          <span className={classes.productIcon}>
            <FavoriteIcon className={style.root} />
          </span>
        </div>
      </div>
    </div>
  );
}
