import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import React from "react";
import image from "../../../images/subscribe-main.png";
import YouTubeIcon from "@material-ui/icons/YouTube";
const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.secondary.main,
    borderBottomRightRadius: theme.spacing(15),
    color: "#fff",
  },
  form: {
    position: "relative",
    margin: theme.spacing(4, 0),
    "& button": {
      position: "absolute",
      right: "20px",
      bottom: "10px",
    },
  },
  icon: {
    "& > *": {
      margin: theme.spacing(0, 1),
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
const Subscribe = () => {
  const classes = useStyles();
  return (
    <Box py={10} className={classes.root}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} sm={7}>
            <Typography gutterBottom variant="h4">
              Subscribe News Letter for Get Update
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              tempor <br /> incididunt ut labore et dolore magna aliqua.
            </Typography>
            <form className={classes.form}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter your Email"
              />
              <Button variant="contained">Subscribe</Button>
            </form>
            <Box className={classes.icon}>
              <IconButton>
                <FaFacebookF />
              </IconButton>
              <IconButton>
                <FaTwitter />
              </IconButton>
              <IconButton>
                <FaInstagram />
              </IconButton>
              <IconButton>
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Box>
              <img
                style={{ display: "block", width: "100%" }}
                src={image}
                alt="Burget with Coc"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Subscribe;
