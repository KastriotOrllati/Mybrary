import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./BookDetails.css";
import Rating from "@material-ui/lab/Rating";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { authHeader } from "../../Utils/authHeader";

function BookDetails({ props }) {
  const [wishlisted, setWishlisted] = useState(false);
  const [login, setLogin] = useState(false);
  const [review, setReview] = useState("");
  const [ourReviews, setOurReviews] = useState([]);

  let { slug } = useParams();

  const {
    imageName,
    titulli,
    autori,
    nrFaqes,
    category,
    cmimi,
    stock,
    isbn,
    reviews,
    id,
  } = props;
  useEffect(() => {
    let response = authHeader();

    if (response.Authorization) {
      setLogin(true);
    }
    console.log("this is runnin");
    setOurReviews(reviews);
  }, [login]);
  console.log("outReviews", ourReviews);
  const handleSubmit = (e) => {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem("user"));
    const LibraId = id;
    const message = review;
    const myreview = { LibraId, message };
    if (user == null) return;
    if (user.token !== null) {
      // .then((data) => {
      //   // setResponseData(data);
      //   if (data.title !== "Unauthorized") {
      //     localStorage.setItem("user", JSON.stringify(data));

      //     history.push("/");
      //     history.go();
      //   }
      // console.log(data);
      // })
      fetch("http://localhost:39068/api/Libra/Review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${"Bearer " + user.token}`,
        },
        body: JSON.stringify(myreview),
      }).then((res) => res.json()).catch = (err) => {
        console.log(err);
      };
    }
  };

  console.log("reviews", props.reviews);

  const handleDelete = (id) => {
    fetch(`http://localhost:39068/api/Libra/DeleteReview/${id}`, {
      method: "DELETE",
    }).catch((err) => {
      console.log(err);
    });

    console.log("id", id);
    // ourReviews.filter((id) => reviews.id !== id);
    setOurReviews(ourReviews.filter((r) => r.id !== id));
    console.log("Review after delete", reviews);
  };

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
      boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
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
      marginBottom: "70px",
      "@media (max-width: 665px)": {
        flexWrap: "wrap",
      },
    },
    wrapper: {
      height: 505,
      width: 400,
      display: "flex",
      justifyContent: "center",
    },
  });
  console.log("review", review);

  const classes = useStyles();
  return (
    <>
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
            <h1>Titulli: {titulli}</h1>
            <h3>{autori} (author) </h3>
            <div className="rating-div">
              <span className="rating">
                <Box component="fieldset" mb={1} borderColor="transparent">
                  <Rating name="size-small" size="small" value={4} readOnly />
                </Box>
              </span>

              <span>
                {login ? null : <Link to="/signin">Sign In to review</Link>}
              </span>
            </div>
          </div>
          <div className="extraInfo">
            <div className="nr-kategoria">
              <div className="nr-cat-div">
                <span>
                  <strong>Nr faqev:</strong> {nrFaqes}
                </span>
                <span>
                  <strong>Category:</strong> {category}
                </span>
              </div>
              <div className="qmimi">
                <span>
                  <strong>Cmimi:</strong> {cmimi}
                </span>
              </div>
            </div>
            <div className="save-stock">
              <span>
                <strong>Save $1.50</strong>
              </span>
              <span>
                <strong> In stock </strong>
                {stock}
              </span>
            </div>
            <span className="available">
              <strong>ISBN: </strong>
              {isbn}
            </span>
          </div>

          <div className="bookButtons">
            <p>Quantity</p>
            <Button className="button" onClick={wishlist}>
              WISHLIST
            </Button>
          </div>
          {login ? (
            <div className="bookButtons">
              <form onSubmit={handleSubmit}>
                <textarea
                  rows={6}
                  cols={66}
                  placeholder="Write a review"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                ></textarea>
                <Button type="submit" className="button">
                  Submit Review
                </Button>
              </form>
            </div>
          ) : null}
        </div>
      </div>
      <span className="review-span">
        <h3>Reviews</h3>
      </span>
      <section className="reviews-container">
        {ourReviews?.map((review) => (
          <div className="review" key={review.id}>
            <div className="review-header">
              <h5>Autori Name</h5>
              <small>29.02.2020</small>
            </div>
            <div className="review-text">
              <p>{review.message}</p>
            </div>
            <div onClick={() => handleDelete(review.id)}>X</div>
          </div>
        ))}
      </section>
    </>
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
