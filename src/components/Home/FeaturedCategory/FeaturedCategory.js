import {
  Box,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
const useStyles = makeStyles((theme) => ({
  imgContainer: {
    position: "relative",
    transition: "all .5s ease",
    "& .img": {
      display: "block",
      width: "100%",
      borderRadius: theme.spacing(3),
    },
    "&:hover": {
      transform: "translateY(-20px)",
      "& .MuiIconButton-root": {
        background: theme.palette.secondary.main,
      },
    },
  },
  icon: {
    background: theme.palette.primary.main,
    color: "#fff",
  },
  category: {
    background: "#fff",
    position: "absolute",
    display: "flex",
    left: 0,
    right: 0,
    bottom: "30px",
    margin: theme.spacing(0, 5),
    padding: theme.spacing(0.5, 0),
    justifyContent: "space-around",
    borderRadius: "50px",
    alignItems: "center",
  },
}));
const FeaturedCategory = ({ category, image, catImg }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box className={classes.imgContainer}>
        <img className="img" src={image} alt="Feutred Category" />
        <Box className={classes.category}>
          <img src={catImg} alt="category" />
          <Typography variant="h6">{category}</Typography>
          <IconButton className={classes.icon}>
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Box>
    </Grid>
  );
};

export default FeaturedCategory;
