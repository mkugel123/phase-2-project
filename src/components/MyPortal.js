import React, { useState } from "react";
import FoodCard from "./FoodCard";
import EditFoodForm from "./EditFoodForm";
import AddFoodForm from "./AddFoodForm";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function MyPortal({ foodItems, onAddFoodFormSubmit, onEditFoodFormSubmit}) {

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
      image: foodItem.image,
      name: foodItem.name,
      price: foodItem.price,
      side: foodItem.side,
      category: foodItem.category
    })
  }
  
  const menu = foodItems.map(foodItem => {

    return (
      
        <FoodCard
          key={foodItem.id}
          item={foodItem}
          action="Edit"
          handleClick={()=>handleClick(foodItem)}
        >
        {clickedItem === foodItem.id ? (
          <EditFoodForm
            selectedFoodData={selectedFoodData}
            onEditFoodFormSubmit={onEditFoodFormSubmit}
          />
        ) : null}  
        </FoodCard>
    )
    
  })

  return(
    <>
      <Button sx={{margin: "50px"}} onClick={() => setIsClicked(!isClicked)}>Add Item</Button>
      {isClicked ? <AddFoodForm onAddFoodFormSubmit={onAddFoodFormSubmit}/> : null}
      <Grid 
        container 
        spacing={4}
        justifyContent="center"
      >
        {menu}
      </Grid>
    </>
  )
}

export default MyPortal




