import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .active": {
      background: theme.palette.primary.main,
      color: "#fff",
      "& p": {
        color: "#fff",
      },
    },
    "& .MuiBox-root": {
      padding: theme.spacing(1.5, 4, 4),
      borderRadius: theme.spacing(4),
      border: `1px solid ${theme.palette.primary.main}`,
    },
    "& .normal": {
      transition: "all .5s ease",
      background: "#fff",
      "&:hover": {
        background: theme.palette.primary.main,
        color: "#fff",
        "& p": {
          color: "#fff",
        },
      },
    },
  },
}));
const Service = ({ id, title, image, desc }) => {
  const classes = useStyles();
  return (
    <Grid item sm={6} md={4} className={classes.root}>
      <Box className={id % 2 === 0 ? "active" : "normal"} align="center">
        <img
          style={{ display: "block", marginBlock: "24px", width: "90px" }}
          src={image}
          alt={title}
        />
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography color="textSecondary">{desc}</Typography>
      </Box>
    </Grid>
  );
};

export default Service;
