import {
  Box,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    overflow: "hidden",
    borderRadius: theme.spacing(2, 2, 0, 0),
    "&:hover img": {
      transform: "scale(1.2)",
    },
    "& img": {
      display: "block",
      width: "100%",
      borderRadius: theme.spacing(2, 2, 0, 0),
      transition: "all .5s ease",
    },
    "& .info": {
      background: "rgba(0,0,0,.7)",
      color: "#fff",
      textAlign: "center",
      position: "absolute",
      left: "0",
      right: "0",
      bottom: "0px",
      padding: theme.spacing(1, 0),
      borderRadius: theme.spacing(2, 2, 0, 0),
    },
  },
  icon: {
    "& > *": {
      margin: theme.spacing(1),
    },
    "& .MuiIconButton-root": {
      background: theme.palette.secondary.main,
      color: "#fff",
      "&:hover": {
        background: theme.palette.primary.main,
      },
    },
  },
}));
const Chef = ({ image, name, designation }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Box className={classes.root}>
        <img src={image} alt={name} />
        <Box className="info">
          <Typography style={{fontFamily: "'Poppins', sans-serif",fontWeight:'bold'}} gutterBottom variant="h6">
            {name}
          </Typography>
          <Typography>{designation}</Typography>
        </Box>
      </Box>
      <Box align="center" className={classes.icon}>
        <IconButton>
          <FaFacebookF />
        </IconButton>
        <IconButton>
          <FaTwitter />
        </IconButton>
        <IconButton>
          <FaInstagram />
        </IconButton>
      </Box>
    </Grid>
  );
};

export default Chef;
