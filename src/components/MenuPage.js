import React from "react";
import FoodCard from "./FoodCard";

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
    <div className="card-container">
      {menu}
    </div>
  )
}

export default MenuPage