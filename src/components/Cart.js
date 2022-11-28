import React, { useState } from "react";
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
        {cartItem.amount > 1 ? <span>X{cartItem.amount}</span> : null}
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