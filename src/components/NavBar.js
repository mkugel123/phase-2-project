import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from "react-router-dom";

function NavBar({ cartItems, isLoggedIn, setIsLoggedIn }) {

  return(
    <Tabs sx={{position: "sticky"}}>
      <Tab label="Home" to="/" exact component={Link} />
      <Tab label="Menu" to="/menu" exact component={Link} />
      <Tab label={"Cart " + cartItems.length} to="/cart" exact component={Link} />
      {isLoggedIn ? <Tab label="My Portal" to="/myportal" exact component={Link} /> : null}
      <Tab onClick={isLoggedIn ? ()=>setIsLoggedIn(false) : null} label={isLoggedIn ? "Log out" : "Log in"} to={isLoggedIn ? "/" : "/login"} exact component={Link} />
    </Tabs>
  )
}

export default NavBar