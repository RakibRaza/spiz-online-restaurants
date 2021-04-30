import {
  Box,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import logo from "../../images/logo.png";
import { BiPhoneCall, BiMessageDetail, BiMap } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import FooterCol from "./FooterCol";
const useStyles = makeStyles((theme) => ({
  iconBtn: {
    "& > *": {
      backgroundColor: theme.palette.secondary.main,
      color: "#fff",
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(3),
      transition: "all .5s ease",
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}));
function Copyright() {
  return (
    <Typography variant="subtitle1">
      {"Copyright © "}
      {new Date().getFullYear()} Sqiz. All Rights Reserved By{" "}
      <strong style={{ color: "primary.main" }}>Rakib Raza</strong>
    </Typography>
  );
}
const services = [
  { title: "Support" },
  { title: "About" },
  { title: "Chefs" },
  { title: "Blog" },
  { title: "Privacy Policy" },
];
const quickLinks = [
  { title: "Services" },
  { title: "Food Collection" },
  { title: "Online Order" },
  { title: "Blog" },
  { title: "Contact" },
];
const contact = [
  { title: "+1 1234 56 789", icon: <BiPhoneCall /> },
  { title: "+5 1434 56 768", icon: <BiPhoneCall /> },
  { title: "info@spiz.com", icon: <BiMessageDetail /> },
  { title: "hello@spiz.com", icon: <BiMessageDetail /> },
  { title: "Br1. 28/A Street, New York, USA", icon: <BiMap /> },
];
const icons = [<FaFacebookF />, <FaTwitter />, <FaInstagram />, <FaYoutube />];

const Footer = () => {
  const classes = useStyles();
  return (
    <footer>
      <Container>
        <Box py={10}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <img style={{ display: "block" }} src={logo} alt="logo" />
              <Typography
                color="textSecondary"
                style={{ marginTop: "16px", lineHeight: "2" }}
              >
                Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Box className={classes.iconBtn}>
                {icons.map((icon, index) => (
                  <IconButton key={index}>{icon}</IconButton>
                ))}
              </Box>
            </Grid>
            {<FooterCol title="Services" menu={services} />}
            {<FooterCol title="Quick Links" menu={quickLinks} />}
            {<FooterCol title="Contact Us" menu={contact} />}
          </Grid>
        </Box>
      </Container>
      <Box
        py={4}
        bgcolor="secondary.main"
        style={{ color: "#fff", borderRadius: "50px 50px 0 0" }}
        align="center"
      >
        {<Copyright />}
      </Box>
    </footer>
  );
};

export default Footer;
