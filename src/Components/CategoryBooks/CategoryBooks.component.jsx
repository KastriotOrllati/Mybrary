import "../BookList/BookList.css";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { authHeader } from "../../Utils/authHeader";
import "./CategoryBooks.css";
import BookCard from "../BookCard/BookCard.component";

export default function CategoryBooks(props) {
  const { bookCategory } = props;

  const [categoryBooks, setCategoryBooks] = useState([]);

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
  }, [bookCategory]);

  return (
    <div className="category-booklist-conatiner">
      <div className="category-div-booklist">
        <h1>{bookCategory} Books</h1>
      </div>
      <ul className="category-book-detail">
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
