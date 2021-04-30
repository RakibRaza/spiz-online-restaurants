import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "250px",
  },
  appBar: {
    background: "#fff",
    boxShadow: "none",
  },
  menu: {
    "& > *": {
      margin: theme.spacing(0, 2),
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <AppBar className={classes.appBar}>
      <Container>
        <Toolbar>
          <Box style={{ flexGrow: 1 }}>
            <img src={logo} alt="logo" />
          </Box>
          <Hidden smDown>
            <Box className={classes.menu}>
              <Button component={Link} to="/">
                Home
              </Button>
              <Button component={Link} to="/cart">
                cart
              </Button>
              <Button>Contact</Button>
              <Badge badgeContent={4} style={{ color: "#000" }}>
                <ShoppingCartIcon />
              </Badge>
              <Button startIcon={<PhoneInTalkIcon />} variant="contained">
                +1 123 456 789
              </Button>
            </Box>
          </Hidden>
          <Hidden mdUp>
            <Box>
              <IconButton onClick={() => setOpen(true)} color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>
            <Drawer open={open} onClose={() => setOpen(false)}>
              <List disablePadding className={classes.drawer}>
                <ListItem button>
                  <ListItemText primary="News" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Destination" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Blog" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Contact" />
                </ListItem>
              </List>
            </Drawer>
          </Hidden>
        </Toolbar>

        <ScrollToTop showBelow={250} />
      </Container>
    </AppBar>
  );
};

export default NavBar;
