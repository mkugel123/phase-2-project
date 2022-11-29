import React, { useState } from "react";

function AddFoodForm({ onAddFoodFormSubmit }) {

  const [formData, setFormData] = useState({
    category: "meat"
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    console.log(formData)
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('https://restaurant-food.onrender.com/foods', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(r => r.json())
    .then(foodItem => onAddFoodFormSubmit(foodItem))
  }

  return (
      <form onSubmit={handleSubmit}>
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="meat">Meat</option>
          <option value="fish">Fish</option>
          <option value="soup">Soup</option>
        </select>
        <br />
        <label>Name: </label>
        <input type="text" placeholder="name" name="name" value={formData.name} onChange={handleChange}/>
          <br/>
          <label>Image: </label>
          <input type="text" placeholder="image url" name="image" value={formData.image} onChange={handleChange}/>
          <br/>
          <label>Price: </label>
          <input type="number" placeholder="price" name="price" value={formData.price} onChange={handleChange}/>
          <br/>
          {formData.category !== "soup" ? (
            <>
              <label>Side: </label>
              <input type="text" placeholder="side" name="side" value={formData.side} onChange={handleChange}/>
              <br/>
            </>
          )  : null}
          <button type="submit">Add Food</button>
      </form>
    
  )
}

export default AddFoodForm