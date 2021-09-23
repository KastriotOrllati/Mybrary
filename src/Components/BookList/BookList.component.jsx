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
    const ac = new AbortController();
    fetch(
      "http://localhost:39068/api/Libra",

      {
        method: "GET",
        headers: authHeader(),
        signal: ac.signal,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const category = data.filter((book) => book.category === bookCategory);
        setCategoryBooks(category);
      })
      .catch((err) => console.log(err));

    return () => ac.abort;
  }, [bookCategory]);

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
          <Link
            style={{ textDecoration: "none" }}
            to={`/book/` + book.id}
            key={book.id}
          >
            <BookCard book={book} key={book.id} />
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
