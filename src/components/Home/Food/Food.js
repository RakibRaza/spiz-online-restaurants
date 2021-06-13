import {
  Box,
  Button,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { increase, decrease, addToCart, getTotals } from "../../../Redux/cartAction";
import { useDispatch, useSelector } from 'react-redux'
const useStyles = makeStyles((theme) => ({
  icon: {
    "& > *": {
      margin: theme.spacing(1),
    },
    "& .MuiIconButton-root": {
      background: theme.palette.primary.main,
    },
  },
}));
const Food = ({ id, image, name, price, quantity }) => {
  const dispatch = useDispatch()
  const classes = useStyles();
  const cart = useSelector(state => state.cart)
  const foods = useSelector(state => state.foods)
  const food = foods.find(item => item.id === id)
  const handleClick = (id) => {
    const newFood = cart.find(item => item.id === id)
    if (!newFood) {
      dispatch(addToCart(food))
      dispatch(getTotals())
    } else {
      newFood.quantity = food.quantity
      dispatch(getTotals())
    }
  }
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box component={Paper} style={{ borderRadius: "16px" }}>
        <img
          style={{
            display: "block",
            width: "100%",
            height: "300px",
            objectFit: "cover",
            borderRadius: "16px 16px 0 0",
          }}
          src={image}
          alt={name}
        />
        <Box p={2}>
          <Typography style={{ fontWeight: 'bold' }} gutterBottom variant="h6">
            {name}
          </Typography>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography style={{ color: "#fe3333", fontWeight: "bold" }}>
              ${price}
            </Typography>
            <Box className={classes.icon}>
              <IconButton onClick={() => dispatch(decrease(id))}>
                <RemoveIcon />
              </IconButton>
              <Typography
                color="primary"
                display="inline"
                style={{ fontWeight: "bold" }}
              >
                {quantity}
              </Typography>
              <IconButton onClick={() => dispatch(increase(id))}>
                <AddIcon />
              </IconButton>
            </Box>
          </Box>
          <Box align="center" mt={2}>
            <Button onClick={() => handleClick(id)} endIcon={<ShoppingCartIcon />} variant="contained">
              Add to cart
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Food;
