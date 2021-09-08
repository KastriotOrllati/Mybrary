import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./BookDetails.css";
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
  const { imageName, titulli, autori } = props;
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
          <h2>{titulli}</h2>
          <h3>{autori} (author) </h3>
          <div>
            <span>RATING </span>
            <span> Reviews</span>
            <span> SIGN IN TO WRITE A REVIEW</span>
          </div>
        </div>
        <div className="extraInfo">
          <span>NR I FAQEVE</span>
          <span>kategoria</span>
          <span>QMIMI</span>
        </div>
        <div className="bookButtons">
          <Button>Quantity</Button>
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
