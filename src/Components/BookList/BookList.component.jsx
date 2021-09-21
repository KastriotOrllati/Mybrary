import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BookList.css";
import { authHeader } from "../../Utils/authHeader";
import "./BookList.css";

import BookCard from "../BookCard/BookCard.component";

function BookList(props) {
  const { bookCategory } = props;

  // const [books, setBooks] = useState([]);
  const [categoryBooks, setCategoryBooks] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:39068/api/Libra", {
  //     method: "GET",
  //     headers: authHeader(),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setBooks(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, [setBooks]);

  useEffect(() => {
    fetch("http://localhost:39068/api/Libra", {
      method: "GET",
      headers: authHeader(),
    })
      .then((res) => res.json())
      .then((data) => {
        const category = data.filter((book) => book.category === bookCategory);
        setCategoryBooks(category);
      })
      .catch((err) => console.log(err));
  }, [setCategoryBooks]);

  // const handleCategory = () => {
  //   const bookss = books.filter((book) => book.category === props.category);
  //   setCategoryBooks(bookss);
  // };

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
    <div className="booklist-conatiner">
      <div className="div-booklist">
        <h1>{bookCategory} Books</h1>
        <Link to={"/books/category/" + bookCategory} className="see-more">
          <button>SEE MORE</button>
        </Link>
      </div>
      <ul className="book-detail">
        {categoryBooks.map((book) => (
          <li className="link">
            <Link
              style={{ textDecoration: "none" }}
              to={`/book/` + book.id}
              key={book.id}
            >
              <BookCard book={book} key={book.id} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;

// {books.map((book) => (
//   <li className="link">
//     <Link to={`/book/` + book.id} key={book.id}>
//       <BookCard book={book} key={book.id} />
//     </Link>
//   </li>
// ))}

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
