import {
  Box,
  Button,
  Container,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import image from "../../../images/join1.png";
const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.secondary.main,
    height: 500,
    borderBottomRightRadius: theme.spacing(15),
    "& h4": {
      color: theme.palette.primary.main,
    },
    "& p": {
      color: "#fff",
    },
  },
  imgContainer: {
    "& img": {
      display: "block",
      transform: "translateY(-130px)",
      height: 614,
      width: "100%",
    },
  },
  btn: {
    border: `1px solid ${theme.palette.primary.main}`,
    marginTop: theme.spacing(4),
    "&:hover": {
      border: "1px solid #fff",
    },
  },
}));
const DeliveryMan = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={4}>
          <Hidden smDown>
            <Grid item md={6}>
              <Box className={classes.imgContainer}>
                <img src={image} alt="Delivery Man" />
              </Box>
            </Grid>
          </Hidden>
          <Grid item xs={12} md={6}>
            <Box pt={10}>
              <Typography gutterBottom variant="h4">
                Join As a Delivery Man
              </Typography>
              <Typography color="textSecondary">
                Restaurants range from inexpensive and informal lunching or
                dining places catering to people working nearby, with modest
                food served in simple settings at low prices.
              </Typography>
              <Button className={classes.btn} variant="contained">
                Apply Now
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default DeliveryMan;
