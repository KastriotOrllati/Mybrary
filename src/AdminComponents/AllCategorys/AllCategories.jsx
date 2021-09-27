import React, { useEffect, useState } from "react";
import {
  Button,
  makeStyles,
  Paper,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";

import useTable from "../AllBooks/useTable";

import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CloseIcon from "@material-ui/icons/Close";
import CreateCategory from "./CreateCategory";
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

const headCells = [{ id: "category", label: "Category name" }];

function AllCategories() {
  const classes = useStyles();
  const [category, setCategory] = useState([]);

  const [filterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  useEffect(() => {
    fetch("http://localhost:39068/api/Categories/")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  const onDeleteHandler = (id) => {
    fetch(`http://localhost:39068/api/Categories/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    setCategory(category.filter((event) => event.id !== id));
  };

  // const everyBook = (id) => {
  //   fetch(`http://localhost:39068/api/Libra/${id}`);
  // };

  const { TblContainer, TblHead, TblPegination, recordsAfterPagingAndSorting } =
    useTable(category, headCells, filterFn);
  return (
    <div>
      <CreateCategory />
      <Paper className={classes.pageContent}>
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((category) => (
              <TableRow key={category.id}>
                <TableCell>{category.categories}</TableCell>

                <TableCell>
                  <Button color="primary">
                    <EditOutlinedIcon fontSize="small" />
                  </Button>
                  <Button
                    color="secondary"
                    onClick={() => {
                      onDeleteHandler(category.id);
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

export default AllCategories;

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
// />;
