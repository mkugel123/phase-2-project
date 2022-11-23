import React, { useState } from "react";
import FoodCard from "./FoodCard";

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
      />

    )
  })

  return(
    <div className="card-container">
      {cart}
    </div>
  )
}

export default Cart