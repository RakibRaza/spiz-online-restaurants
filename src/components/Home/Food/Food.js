import {
  Box,
  Button,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
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
const Food = ({ image, name, price }) => {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
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
          <Typography style={{fontFamily: "'Poppins', sans-serif",fontWeight:'bold'}} gutterBottom variant="h6">
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
              <IconButton onClick={handleDecrease}>
                <RemoveIcon />
              </IconButton>
              <Typography
                color="primary"
                display="inline"
                style={{ fontWeight: "bold" }}
              >
                {quantity}
              </Typography>
              <IconButton onClick={handleIncrease}>
                <AddIcon />
              </IconButton>
            </Box>
          </Box>
          <Box align="center" mt={2}>
            <Button endIcon={<ShoppingCartIcon />} variant="contained">
              Add to cart
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Food;
