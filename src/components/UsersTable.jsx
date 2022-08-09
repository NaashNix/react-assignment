import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@material-ui/core";

const bindButtonAction = () => {
    alert('Deleted');
}

const UsersTable = () => {
  function createData(firstName, lastName, email, mobileNo, city) {
    return { firstName, lastName, email, mobileNo, city, bindButtonAction };
  }

  const rows = [
    createData(
      "Ravindu",
      "Thilakshana",
      "naashnix@gmai.com",
      "070205377",
      "Panadura"
    ),
    createData(
      "Ravindu",
      "Thilakshana",
      "naashnix@gmai.com",
      "070205377",
      "Panadura"
    ),
    createData(
      "Ravindu",
      "Thilakshana",
      "naashnix@gmai.com",
      "070205377",
      "Panadura"
    ),
    createData(
      "Ravindu",
      "Thilakshana",
      "naashnix@gmai.com",
      "070205377",
      "Panadura"
    ),
    createData(
      "Ravindu",
      "Thilakshana",
      "naashnix@gmai.com",
      "070205377",
      "Panadura"
    ),
  ];

  return (
    <div style={{ margin: "3rem auto" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Mobile No</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.firstName}
                </TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.mobileNo}</TableCell>
                <TableCell align="right">{row.city}</TableCell>
                <TableCell align="right">
                  <Button variant={"outlined"} color={"primary"} onClick={row.bindButtonAction}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UsersTable;
