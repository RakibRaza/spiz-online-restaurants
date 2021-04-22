import {
  Box,
  Button,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    "& button": {
      position: "absolute",
      right: "20px",
      bottom: "-18px",
      transition: "all .5s ease",
      "&:hover": {
        transform: "translateX(20px)",
      },
    },
    "& img": {
      display: "block",
      width: "100%",
    },
    "& .imgContainer": {
      position: "relative",
    },
    "& .date": {
      background: theme.palette.primary.main,
      position: "absolute",
      right: "20px",
      bottom: "-15px",
      padding: theme.spacing(0.6, 1.8),
      borderRadius: theme.spacing(0.8),
    },
  },
}));
const Blog = ({ title, desc, image }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box className={classes.root} component={Paper}>
        <Box className="imgContainer">
          <img src={image} alt={title} />
          <Box className="date">
            <Typography>01 May 2021</Typography>
          </Box>
        </Box>
        <Box p={4}>
          <Typography
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "600" }}
            gutterBottom
            variant="h5"
          >
            {title}
          </Typography>
          <Typography paragraph color="textSecondary">
            {desc}
          </Typography>
        </Box>
        <Button variant="contained">Read More</Button>
      </Box>
    </Grid>
  );
};

export default Blog;
