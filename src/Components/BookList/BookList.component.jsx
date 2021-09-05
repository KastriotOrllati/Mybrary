import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BookList.css";
import { authHeader } from "../../Utils/authHeader";
import "./BookList.css";

import BookCard from "../BookCard/BookCard.component";

function BookList() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:39068/api/Libra", {
      method: "GET",
      headers: authHeader(),
    })
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      })
      .catch((err) => console.log(err));
  }, [setBooks]);

  // const handleDelete = (id) => {
  //   fetch(`http://localhost:39068/api/Libra/${id}`, {
  //     method: "DELETE",
  //     headers: { "Content-Type": "application/json" },
  //   });

  //   setBooks(books.filter((event) => event.id !== id));
  // };

  // const everyBook = (id) => {
  //   fetch(`http://localhost:39068/api/Libra/${id}`);
  // };

  return (
    <div>
      <h1>All list of events</h1>
      <ul>
        {books.map((book) => (
          <Link to={`/book/` + book.id} key={book.id}>
            <BookCard book={book} key={book.id} />
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default BookList;

// {event.name}

// <Link to={`/admin/events/` + event.id}>Details</Link>
// <button type="submit" onClick={() => handleDelete(event.id)}>
//   Delete
// </button>

// {
//   events.map((event) => (
//     <li key={event.id}>
//       <Card className={classes.root}>
//         <CardActionArea>
//           <CardMedia
//             className={classes.media}
//             image={"http://localhost:39068/Images/" + event?.imageName}
//             title="Contemplative Reptile"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="h2">
//               {event.titulli}
//             </Typography>
//             <Typography
//               variant="body2"
//               color="textSecondary"
//               component="p"
//             >
//               {event.autori}
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Link to={`/admin/events/` + event.id} className="link">
//             Details
//           </Link>
//           <Button
//             size="small"
//             variant="contained"
//             color="secondary"
//             type="submit"
//             onClick={() => handleDelete(event.id)}
//           >
//             Delete
//           </Button>
//         </CardActions>
//       </Card>
//     </li>
//   ));
// }
