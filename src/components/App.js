import React, { useState, useEffect } from 'react';
import Home from './Home';
import MenuPage from './MenuPage';
import NavBar from './NavBar';
import Cart from './Cart';
import Login from './Login';
import MyPortal from './MyPortal';
import { Switch, Route } from "react-router-dom"

function App() {

  const [foodItems, setFoodItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    fetch("http://localhost:8000/foods")
    .then(r => r.json())
    .then(food => setFoodItems(food))
  }, [])

  function handleFoodItemClick(id) {
    const selectedFood = foodItems.find(foodItem => foodItem.id === id)
    
    setCartItems([
      ...cartItems,
      selectedFood
    ])
  }

  function handleCartItemClick(id) {
    const selectedFood = cartItems.find(cartItem => cartItem.id === id)
    setCartItems(cartItems.filter(cartItem => cartItem.id !== selectedFood.id))
  }

  const correctUser = {user: "Moish Kugel", pass: "is awesome"}

  function handleLoginSubmit(loginData) {
    if(loginData.user === correctUser.user && loginData.pass === correctUser.pass){
      setIsLoggedIn(true)
    }
  }

  function handleEditFoodFormSubmit(updatedFoodItem) {
    const updatedFoodItems = foodItems.map(foodItem => {
      if(updatedFoodItem.id === foodItem.id) {
        return updatedFoodItem
      }
      return foodItem
    })
    setFoodItems(updatedFoodItems)
  }

  return (
    <>
      <NavBar cartItems={cartItems}/>
      <Switch>
        <Route exact path="/menu">
          <MenuPage
            foodItems={foodItems}
            onfoodItemClick={handleFoodItemClick}
          />
        </Route>
        <Route exact path="/cart">
          <Cart 
            cartItems={cartItems}
            onCartItemClick={handleCartItemClick}
          />
        </Route>
        <Route exact path="/login">
          <Login 
            onLoginSubmit={handleLoginSubmit}
          />
        </Route>
        <Route exact path="/myportal">
          <MyPortal 
            isLoggedIn={isLoggedIn}
            foodItems={foodItems}
            onEditFoodFormSubmit={handleEditFoodFormSubmit}
          />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
       
      </Switch> 
    </>
  );
}

export default App;
