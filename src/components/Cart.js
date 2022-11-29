import React from "react";
import FoodCard from "./FoodCard";
import Grid from '@mui/material/Grid';

function Cart({ cartItems, onCartItemClick }) {

  const cart = cartItems.map(cartItem => {

    function handleClick() {
      onCartItemClick(cartItem.id)
    }

    return(
      <FoodCard 
        key={cartItem.name} 
        item={cartItem}
        action="Remove from cart"
        handleClick={handleClick}
      >
      <span>X{cartItem.amount}</span>
      </FoodCard>

    )
  })

  return(
    <Grid 
      container 
      spacing={4}
      justifyContent="center"
    >
      {cart}
    </Grid>
  )
}

export default Cart