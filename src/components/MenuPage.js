import React from "react";
import FoodCard from "./FoodCard";
import Grid from '@mui/material/Grid';


function MenuPage({ foodItems, onfoodItemClick }) {

  const menu = foodItems.map(foodItem => {

    function handleClick() {
      onfoodItemClick(foodItem.id)
    }

    return (
      <FoodCard 
        key={foodItem.name} 
        item={foodItem}
        action="Add to cart"
        handleClick={handleClick}
      />
    )
  })

  return (
    <Grid 
      container 
      spacing={4}
      justifyContent="center"
    >
      {menu}
    </Grid>
  )
}

export default MenuPage