import { Box, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import data from "../../../data/featured";
import FeaturedCategory from "../FeaturedCategory/FeaturedCategory";
const FeaturedCategories = () => {
  const [categories, setCategories] = useState(data);
  return (
    <Box py={10}>
      <Typography gutterBottom variant="h4">
        Featured Categories
      </Typography>
      <Box maxWidth="600px">
        <Typography color="textSecondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Box>
      <Box my={6}>
        <Grid container spacing={4} justify="center">
          {categories.map((category) => (
            <FeaturedCategory key={category.id} {...category} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FeaturedCategories;
