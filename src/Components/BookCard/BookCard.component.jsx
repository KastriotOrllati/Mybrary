import React from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const BookCard = ({ book }) => {
  const { titulli, autori, cmimi, imageSrc } = book;
  const useStyles = makeStyles({
    root: {
      maxWidth: 210,
      width: "100%",
      maxHeight: 420,
      height: "100%",
      border: "none",
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 30,
    },
    media: {
      height: 280,
      width: 210,
    },
    "@media (max-width: 650px)": {
      root: {
        maxWidth: "200px",
        maxHeight: "500px",
      },
      media: {
        height: 300,
        width: 180,
      },
    },
  });
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          alt="Contemplative Reptile"
          image={imageSrc}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h3">
            {titulli}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {autori}
          </Typography>
          <Typography component="span">${cmimi}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BookCard;
