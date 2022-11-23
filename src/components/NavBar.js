import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ cartItems, isLoggedIn, setIsLoggedIn }) {

  return(
    <>
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/menu" exact>Menu</NavLink>
      <NavLink to="/cart" exact>Cart {cartItems.length}</NavLink>
      {isLoggedIn ? <NavLink to="/myportal" exact>My Portal</NavLink> : null}
      {isLoggedIn ? <button onClick={()=>setIsLoggedIn(false)}>Log out</button> : <NavLink to="/login" exact>Log in</NavLink>}
    </>
  )
}

export default NavBar