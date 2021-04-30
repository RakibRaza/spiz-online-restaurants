import { Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from 'react-redux'
import Food from "../Food/Food";
const FoodCollection = ({ category }) => {
  const foods = useSelector(state => state.foods.filter(food => food.category === category))


  return (
    <Grid container spacing={4}>
      {foods.map((food) => (
        <Food key={food.id} {...food} />
      ))}
    </Grid>
  );
};

export default FoodCollection;
