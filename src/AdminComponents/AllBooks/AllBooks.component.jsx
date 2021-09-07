import React, { useEffect, useState } from "react";

function AllBooks(props) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:39068/api/Libra/")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <p>to do table for all lists</p>
    </div>
  );
}

export default AllBooks;
