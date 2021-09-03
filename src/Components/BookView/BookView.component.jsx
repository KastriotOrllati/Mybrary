import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BookDetails from "../BookDetails/BookDetails.component";
import "./BookView.css";

function BookView() {
  const [event, setEvent] = useState({});
  let { slug } = useParams();
  useEffect(() => {
    // const api = "http://localhost:33581/api/libra/" + slug;
    // console.log(api);
    fetch("http://localhost:39068/api/Libra/" + slug)
      .then((data) => data.json())
      .then((event) => {
        console.log(event);
        setEvent(event);
      });
  }, [slug]);

  return (
    <div>
      <BookDetails props={event} key={event.id} />
    </div>
  );
}

export default BookView;

// Blog details - {slug}
// <h3> {event.titulli} </h3>
// <p>Description: {event.autori} </p>
// <img src={"http://localhost:39068/Images/" + event?.imageName} alt="hi" />
// {event.reviews ? (
//   <ul>
//     {" "}
//     {event.reviews.map((review) => (
//       <li key={review.id}>{review.message}</li>
//     ))}{" "}
//   </ul>
// ) : (
//   <div>add a review!</div>
// )}
