import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Box, Container, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,

    '& th': {
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
      fontWeight: 'bold'
    },
    '& th,td': {
      padding: theme.spacing(3),
      border: '1px solid #dee2e6',
      textAlign: 'center',
    }
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const CartTable = () => {
  const classes = useStyles();
  const cart = useSelector(state => state.cart)
  console.log(cart)
  return (
    <Container component={Box} py={10}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant='h6'>items</Typography>
              </TableCell>
              <TableCell><Typography variant='h6'>quantity</Typography></TableCell>
              <TableCell><Typography variant='h6'>Price</Typography></TableCell>
              <TableCell><Typography variant='h6'>Remove</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell >
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">*</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
export default CartTable