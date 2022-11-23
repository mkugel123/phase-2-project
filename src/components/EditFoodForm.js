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
    fetch(`http://localhost:8000/foods/${selectedFoodData.id}`, {
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
      <input type="text" placeholder={selectedFoodData.name} name="name" value={formData.name} onChange={handleChange}/>
      <input type="number" placeholder={selectedFoodData.price} name="price" value={formData.price} onChange={handleChange}/>
      <button type="submit">Save Changes</button>
    </form>
  )
}

export default EditFoodForm