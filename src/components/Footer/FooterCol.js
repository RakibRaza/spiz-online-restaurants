import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  service: {
    "& a": {
      color: "#00011e",
      display: "block",
      textDecoration: "none",
      margin: theme.spacing(1.6, 0),
      transition: "all .3s linear",
      "&:hover": {
        color: theme.palette.primary.main,
        transform: "translate(12px)",
      },
    },
    "& svg": {
      marginRight: theme.spacing(1.5),
    },
  },
  title: {
    marginBottom: theme.spacing(3.5),
    fontFamily: "'Poppins', sans-serif",
  },
}));
const FooterCol = ({ title, menu }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Typography className={classes.title} variant="h5">
        {title}
      </Typography>
      <Box mt={2} className={classes.service}>
        {menu.map((item) => (
          <Typography key={item.title} component={Link} to="/">
            {item.icon ? item.icon : <IoIosArrowForward />} {item.title}
          </Typography>
        ))}
      </Box>
    </Grid>
  );
};

export default FooterCol;
