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
import { useDispatch, useSelector } from 'react-redux';
import ClearIcon from '@material-ui/icons/Clear';
import { Button } from '@material-ui/core';
import { getTotals, removeFromCart } from '../../../Redux/cartAction';

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

const CartTable = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const totalAmount = useSelector(state => state.totalAmount)

  const handleClick = (id) => {
    dispatch(removeFromCart(id))
    dispatch(getTotals())
  }
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
            {cart.map((item) => (
              <TableRow key={item.id}>
                <TableCell><Typography> {item.name}</Typography></TableCell>
                <TableCell><Typography>{item.quantity}</Typography></TableCell>
                <TableCell><Typography>${item.price * item.quantity}</Typography></TableCell>
                <TableCell><ClearIcon onClick={() => handleClick(item.id)} style={{ cursor: 'pointer' }} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box mt={5} align='center'>
        <Typography variant='h6'>Go for Order?</Typography>
        <Typography gutterBottom variant='h3'>Total Order</Typography>
        <Typography variant='h5'>Total: ${totalAmount}</Typography>
        <Box mt={4}>
          <Button variant='contained'>Checkout Items</Button>
        </Box>
      </Box>
    </Container>
  );
}
export default CartTable