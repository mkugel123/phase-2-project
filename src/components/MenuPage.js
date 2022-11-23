import React from "react";
import FoodCard from "./FoodCard";

function MenuPage({ foodItems, onfoodItemClick }) {

  const menu = foodItems.map(foodItem => {

    function handleClick() {
      onfoodItemClick(foodItem.id)
    }

    return (
      <FoodCard key={foodItem.id} item={foodItem}>
        <button onClick={handleClick}>Add to cart</button>
      </FoodCard>
    )
  })

  return (
    <div id="menu">
      {menu}
    </div>
  )
}

export default MenuPage