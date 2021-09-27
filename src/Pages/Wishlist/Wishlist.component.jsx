import React, { useState, useEffect } from "react";
import classes from "./Wishlist.module.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "red",
    fontSize: "50px",
  },
}));

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user !== null) {
      fetch("http://localhost:39068/api/User/Wishlist", {
        method: "GET",
        headers: {
          Authorization: `${"Bearer " + user.token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setWishlist(data))

        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  console.log(wishlist);
  const style = useStyles();
  return (
    <div className={classes.mainDiv}>
      {wishlist.length !== 0 ? (
        wishlist.map((wishlist) => (
          <div className={classes.wishlistItem} key={wishlist.id}>
            <div className={classes.products}>
              <div className={classes.productFirst}>
                <span className={classes.productImage}>
                  <img
                    src={`http://localhost:39068/Images/${wishlist.imageName}`}
                    alt="hello"
                  />
                </span>
                <span className={classes.productDetails}>
                  <h2>{wishlist.titulli}</h2>
                  <h3>{wishlist.autori}</h3>
                  <small>{wishlist.category}</small>
                </span>
              </div>
              <div className={classes.productSecond}>
                <span className={classes.productPrice}>
                  <p>$ {wishlist.cmimi}</p>
                </span>
                <span className={classes.productButton}>
                  <button>DELETE</button>
                </span>
                <span className={classes.productIcon}>
                  <FavoriteIcon className={style.root} />
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className={classes.noWishlist}>Wishlist some books!</div>
      )}
    </div>
  );
}
