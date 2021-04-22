import { Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import data from "../../../data/foodCollection";
import Food from "../Food/Food";
const FoodCollection = ({ category }) => {
  const [foods, setFoods] = useState(
    data.filter((food) => food.category === category)
  );
  console.log(foods);
  return (
    <Grid container spacing={4}>
      {foods.map((food) => (
        <Food key={food.id} {...food} />
      ))}
    </Grid>
  );
};

export default FoodCollection;
