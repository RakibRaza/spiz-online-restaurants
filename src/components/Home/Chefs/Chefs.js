import { Box, Container, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import data from "../../../data/chefs";
import Chef from "../Chef/Chef";
const Chefs = () => {
  const [chefs, setChefs] = useState(data);
  return (
    <Box py={10}>
      <Typography align="center" gutterBottom variant="h4">
        Our Special Chefs
      </Typography>
      <Typography align="center" color="textSecondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod{" "}
        <br></br>
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Box my={6}>
        <Grid container justify="center" spacing={4}>
          {chefs.map((chef) => (
            <Chef key={chef.id} {...chef} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Chefs;
