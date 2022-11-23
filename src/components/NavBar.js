import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return(
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/menu">Menu</NavLink>
      <NavLink to="/cart">Cart</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </>
  )
}

export default NavBar