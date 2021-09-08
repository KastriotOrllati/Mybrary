import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./BookDetails.css";
import Rating from "@material-ui/lab/Rating";
import { useParams } from "react-router";

function BookDetails({ props }) {
  const [wishlisted, setWishlisted] = useState(false);
  let { slug } = useParams();

  const wishlist = (e) => {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem("user"));
    let libraId = slug;
    const reqBody = { libraId };
    // let libraId = { slug };
    // console.log("wishlistsending", wishlistParams);
    if (user == null) return;
    if (user.token !== null) {
      console.log("this is a message when you log in", user.token);
      fetch("http://localhost:39068/api/User/Wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${"Bearer " + user.token}`,
          // Authorization: authHeader(),
        },
        body: JSON.stringify(reqBody),
      })
        .then((res) => console.log(res))
        .then(setWishlisted(true)).catch = (err) => {
        console.log(err);
      };
    }
  };
  // wishlist();
  console.log(wishlisted);
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
  };
  const { imageName, titulli, autori, nrFaqes, category, cmimi, stock, isbn } =
    props;
  // cmimi, nrFaqes, stock;

  const useStyles = makeStyles({
    root: {
      // display: "flex",
      // maxWidth: "100%",
      // maxHeight: "50%",
      // border: "none",
      // marginLeft: 20,
      // marginRight: 20,
      height: 500,
    },
    media: {
      height: 500,
      width: 360,
      // maxWidth: "100%",
      // height: "auto",
      // objectFit: "contain",
    },
    main: {
      display: "flex",
      justifyContent: "space-evenly",
      marginTop: 100,
      height: "100%",
      marginBottom: "50px",
    },
    wrapper: {
      height: 505,
      width: 400,
      display: "flex",
      justifyContent: "center",
    },
  });
  console.log(props);
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.wrapper}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            component="img"
            alt="Contemplative Reptile"
            image={`http://localhost:39068/Images/${imageName}`}
            title="Contemplative Reptile"
          />
        </Card>
      </div>
      <div className="bookInfo">
        <div className="mainInfo">
          <h2>Titulli: {titulli}</h2>
          <h3>{autori} (author) </h3>
          <div className="rating-div">
            <span className="rating">
              <Box component="fieldset" mb={1} borderColor="transparent">
                <Rating
                  name="size-small"
                  size="small"
                  name="read-only"
                  value={4}
                  readOnly
                />
              </Box>
            </span>

            <span> Sign in to review</span>
          </div>
        </div>
        <div className="extraInfo">
          <div className="nr-kategoria">
            <div className="nr-cat-div">
              <span>Nr faqev: {nrFaqes}</span>
              <span>Category: {category}</span>
            </div>
            <div className="qmimi">
              <span>Cmimi: {cmimi}</span>
            </div>
          </div>
          <div className="save-stock">
            <span>Save $1.50</span>
            <span>{stock} in stock</span>
          </div>
          <span className="available">ISBN: {isbn}</span>
        </div>

        <div className="bookButtons">
          <span>Quantity</span>
          <Button>Add to basket</Button>
        </div>
        <div className="bookButtons">
          <Button onClick={handleLogout}>TEXT</Button>
          <Button onClick={wishlist}>WISHLIST</Button>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
// <CardContent>
//   <Typography gutterBottom variant="h6" component="h3">
//     {titulli}
//   </Typography>
//   <Typography gutterBottom variant="h5" component="h2">
//     {autori} (author)
//   </Typography>
// </CardContent>;
