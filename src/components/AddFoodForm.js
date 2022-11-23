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
    fetch('http://localhost:8000/foods', {
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
      <input type="text" placeholder="name" name="name" value={formData.name} onChange={handleChange}/>
      <input type="text" placeholder="image url" name="image" value={formData.image} onChange={handleChange}/>
      <input type="number" placeholder="price" name="price" value={formData.price} onChange={handleChange}/>
      {formData.category !== "soup" ? <input type="text" placeholder="side" name="side" value={formData.side} onChange={handleChange}/> : null}
      <button type="submit">Add Food</button>
    </form>
  )
}

export default AddFoodForm