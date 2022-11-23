import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ cartItems }) {

  return(
    <>
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/menu" exact>Menu</NavLink>
      <NavLink to="/cart" exact>Cart {cartItems.length}</NavLink>
      <NavLink to="/login" exact>Log in</NavLink>
    </>
  )
}

export default NavBar