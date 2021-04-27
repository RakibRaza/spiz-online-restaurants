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
import restant from "../../../images/restant.png";
import restant2 from "../../../images/restant2.png";
import restant3 from "../../../images/restant3.png";
import restant4 from "../../../images/restant4.png";
import restant5 from "../../../images/restant5.png";
const useStyles = makeStyles((theme) => ({
  imgContainer: {
    position: "relative",
    "& .img": {
      display: "block",
      width: "70%",
      margin: "auto",
    },
    "& .img1": {
      position: "absolute",
      top: "30px",
      left: "50%",
      width: "240px",
      transform: "translate(-50%, -50%)",
    },
    "& .img2": {
      position: "absolute",
      top: "50%",
      left: "73%",
      width: "240px",
      transform: "translate(-50%, -50%)",
    },
    "& .img4": {
      position: "absolute",
      top: "50%",
      left: "20%",
      width: "240px",
      transform: "translate(-50%, -50%)",
    },
    "& .img3": {
      position: "absolute",
      top: "97%",
      left: "50%",
      width: "240px",
      transform: "translate(-50%,-50%)",
    },
  },
}));
const AboutUs = () => {
  const classes = useStyles();
  return (
    <Box style={{ background: "#fffdf9" }} py={10}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Hidden xsDown>
          <Grid item xs={12} md={6}>
            <Box className={classes.imgContainer}>
              <img className="img" src={restant} alt="Restaurant" />
              <img className="img1" src={restant2} alt="" />
              <img className="img2" src={restant3} alt="" />
              <img className="img3" src={restant4} alt="" />
              <img className="img4" src={restant5} alt="" />
            </Box>
            </Grid>
            </Hidden>
          <Grid item md={6}>
            <Box mb={4}>
              <Typography gutterBottom variant="h4">
                Spiz is One Of The Most Hygienic Trusted Food Service
              </Typography>
            </Box>
            <Box maxWidth="600px">
              <Typography paragraph color="textSecondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Typography>
              <Typography paragraph color="textSecondary">
                Restaurants range from inexpensive and informal lunching or
                dining places catering to people working nearby.
              </Typography>
            </Box>
            <Box mt={4}>
              <Button variant="contained">Know more</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
