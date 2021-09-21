import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  makeStyles,
  Paper,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
} from "@material-ui/core";

import useTable from "./useTable";

import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "75%",
  },
  newButton: {
    position: "absolute",
    right: "10px",
  },
}));

const headCells = [
  { id: "title", label: "Title name" },
  { id: "author", label: "Book author" },
  { id: "isbn", label: "Book isbn" },
  { id: "category", label: "Category" },
  { id: "actions", label: "Actions" },
];

function AllBooks(props) {
  const classes = useStyles();
  const [books, setBooks] = useState([]);
  const [filterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  useEffect(() => {
    fetch("http://localhost:39068/api/Libra/")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const onDeleteHandler = (id) => {
    fetch(`http://localhost:39068/api/Libra/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    setBooks(books.filter((event) => event.id !== id));
  };

  // const everyBook = (id) => {
  //   fetch(`http://localhost:39068/api/Libra/${id}`);
  // };

  const { TblContainer, TblHead, TblPegination, recordsAfterPagingAndSorting } =
    useTable(books, headCells, filterFn);
  return (
    <div>
      <Paper className={classes.pageContent}>
        <Toolbar>
          <Button
            text="Add New"
            variant="outlined"
            startIcon={<AddIcon />}
            className={classes.newButton}
          />
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((book) => (
              <TableRow key={book.id}>
                <TableCell>{book.titulli}</TableCell>
                <TableCell>{book.autori}</TableCell>
                <TableCell>{book.isbn}</TableCell>
                <TableCell>{book.category}</TableCell>
                <TableCell>
                  <Button color="primary">
                    {/* <EditOutlinedIcon fontSize="small" /> */}
                    <Link to={`/admin/book/edit/${book.id}`}> Edit Book </Link>
                  </Button>
                  <Button
                    color="secondary"
                    onClick={() => {
                      onDeleteHandler(book.id);
                    }}
                  >
                    <CloseIcon fontSize="small" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPegination />
      </Paper>
    </div>
  );
}

export default AllBooks;

// <TextField
//   label="Search Books"
//   className={classes.searchInput}
//   InputProps={{
//     startAdornment: (
//       <InputAdornment position="start">
//         <Search />
//       </InputAdornment>
//     ),
//   }}
// />
