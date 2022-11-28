import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from "react-router-dom";

function NavBar({ cartItems, isLoggedIn, setIsLoggedIn }) {

  const totalItems = cartItems.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.amount
  }, 0)

  return(
    <Tabs value={false}>
      <Tab label="Home" to="/" exact="true" component={Link} />
      <Tab label="Menu" to="/menu" exact="true" component={Link} />
      <Tab label={"Cart " + totalItems} to="/cart" exact="true" component={Link} />
      {isLoggedIn ? <Tab label="My Portal" to="/myportal" exact="true" component={Link} /> : null}
      <Tab onClick={isLoggedIn ? ()=>setIsLoggedIn(false) : null} label={isLoggedIn ? "Log out" : "Log in"} to={isLoggedIn ? "/" : "/login"} exact="true" component={Link} />
    </Tabs>
  )
}

export default NavBar