import React, { useState } from "react";
import FoodCard from "./FoodCard";
import EditFoodForm from "./EditFoodForm";
import AddFoodForm from "./AddFoodForm";

function MyPortal({ foodItems, isLoggedIn, onAddFoodFormSubmit, onEditFoodFormSubmit}) {

  const [isClicked, setIsClicked] = useState(false)
  const [clickedItem, setClickedItem] = useState(0)
  const [selectedFoodData, setSelectedFoodData] = useState([])

  function handleClick(foodItem) {
    if(clickedItem === foodItem.id){
      setClickedItem(0)
      return null
    }
    setClickedItem(foodItem.id)
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
        {clickedItem === foodItem.id ? (
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
      <button onClick={() => setIsClicked(!isClicked)}>Add Item</button>
      {isClicked ? <AddFoodForm onAddFoodFormSubmit={onAddFoodFormSubmit}/> : null}
      {menu}
    </div>
  )
}

export default MyPortal




