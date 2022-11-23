import React, { useState } from "react";
import FoodCard from "./FoodCard";
import EditFoodForm from "./EditFoodForm";

function MyPortal({ foodItems, isLoggedIn, onEditFoodFormSubmit}) {

  const [isClicked, setIsClicked] = useState(0)
  const [selectedFoodData, setSelectedFoodData] = useState([])

  function handleClick(foodItem) {
    setIsClicked(foodItem.id)
    setSelectedFoodData({
      ...selectedFoodData,
      id: foodItem.id,
      name: foodItem.name,
      price: foodItem.price
    })
  }
  
  const menu = foodItems.map(foodItem => {

    return (
      <div key={foodItem.id} >
        <FoodCard 
          item={foodItem}
          action="Edit"
          handleClick={()=>handleClick(foodItem)}
        />
        {isClicked === foodItem.id ? (
          <EditFoodForm
            selectedFoodData={selectedFoodData}
            onEditFoodFormSubmit={onEditFoodFormSubmit}
          />
        ) : null}  
      </div>
     
    )
    
  })

  return(
    <div>
      <button>Add Item</button>
      {menu}
    </div>
  )
}

export default MyPortal




