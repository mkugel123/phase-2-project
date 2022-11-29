import React, { useState } from "react";

function EditFoodForm({ selectedFoodData, onEditFoodFormSubmit }) {

  const [formData, setFormData] = useState(selectedFoodData)

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`https://restaurant-food.onrender.com/foods/${selectedFoodData.id}`, {
      method: 'PATCH',
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(r => r.json())
    .then(foodItem => onEditFoodFormSubmit(foodItem))
  }

  return (
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" name="name" value={formData.name} onChange={handleChange}/>
        <br/>
        <label>Image: </label>
        <input type="text" name="image" value={formData.image} onChange={handleChange}/>
        <br/>
        <label>Price: </label>
        <input type="number" name="price" value={formData.price} onChange={handleChange}/>
        <br/>
        {selectedFoodData.category !== "soup" ? (
          <>
            <label>Side: </label>
            <input type="text" name="side" value={formData.side} onChange={handleChange}/>
            <br/>
          </>
        )  : null}
        <button type="submit">Save Changes</button>
      </form>
  )
}

export default EditFoodForm