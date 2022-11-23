import React, { useState } from "react";
import FoodCard from "./FoodCard";

function Cart({ cartItems, onCartItemClick }) {

  const cart = cartItems.map(cartItem => {

    function handleClick() {
      onCartItemClick(cartItem.id)
    }

    return(
      <FoodCard key={cartItem.name} item={cartItem}>
        <button onClick={handleClick}>Remove from cart</button>
        <p>X{cartItem.amount}</p>
      </FoodCard>
    )
  })

  return(
    <div id="cart">
      {cart}
    </div>
  )
}

export default Cart