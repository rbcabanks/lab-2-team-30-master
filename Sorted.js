import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import { typography } from '@material-ui/system';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import users from "./users.json";

const StyledTableCell = withStyles((theme) => ({
    body: {
        color: theme.palette.common.white,
    },
  }))(TableCell);
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
export default function Sorted() {
    const classes = useStyles();
    
return (
<div className="bottom">
  <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="customized table">
    <TableHead>
          <TableRow>
            <StyledTableCell >Name</StyledTableCell>
            <StyledTableCell >Email</StyledTableCell>
            <StyledTableCell >Phone</StyledTableCell>
            <StyledTableCell >City</StyledTableCell>
          </TableRow>
    </TableHead>
      <TableBody>
        {users.map((row) => (
          <TableRow key={row.name}>
            <TableCell >{row.name}</TableCell>
            <TableCell >{row.email}</TableCell>
            <TableCell >{row.phone}</TableCell>
            <TableCell >{row.address.city}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
);
}