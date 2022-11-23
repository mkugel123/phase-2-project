import React from "react";

function FoodCard({ item, handleClick, action }) {
  const {name, image, price, side, category} = item
  return (
    <div className="card">
      <h3>{name}</h3>
      <img src={image} alt={name}/>
      {category === "soup" ? null : <p><strong>Side: </strong>{side}</p>}
      <p><strong>Price: </strong>${price}</p>
      <button onClick={handleClick}>{action}</button>
    </div>
  );
}

export default FoodCard