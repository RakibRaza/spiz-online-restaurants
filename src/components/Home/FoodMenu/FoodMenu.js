import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import data from "../../../data/foodMenu";
const useStyles = makeStyles((theme) => ({
  menu: {
    "& .active": {
      background: theme.palette.primary.main,
      color: "#fff",
      transform: "translateY(-10px)",
    },
    "& .MuiBox-root": {
      padding: theme.spacing(3, 4, 6),
      borderRadius: theme.spacing(4),
      border: `1px solid ${theme.palette.primary.main}`,
    },
    "& .normal": {
      transition: "all .5s ease",
      background: "#fff",
      "&:hover": {
        background: theme.palette.primary.main,
        color: "#fff",
        transform: "translateY(-10px)",
      },
    },
  },
}));
const FoodMenu = () => {
  const classes = useStyles();
  const [menu, setMenu] = useState(data);
  return (
    <Box style={{ background: "#fffdf9" }} pt={10} pb={15}>
      <Container>
        <Typography align="center" gutterBottom variant="h4">
          Explore Our Food Menu
        </Typography>
        <Typography align="center" color="textSecondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod <br></br>
          tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Box my={6}>
          <Grid container justify="center" spacing={4}>
            {menu.map((item) => {
              const { id, image, title } = item;
              return (
                <Grid
                  key={id}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  className={classes.menu}
                >
                  <Box
                    className={id === 2 ? "active" : "normal"}
                    align="center"
                  >
                    <img
                      style={{ display: "block", marginBlock: "24px" }}
                      src={image}
                      alt={title}
                    />
                    <Typography gutterBottom variant="h5">
                      {title}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default FoodMenu;
