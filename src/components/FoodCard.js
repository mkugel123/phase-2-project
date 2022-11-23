import React from "react";

function FoodCard({ item, children }) {
  const {name, image, price, side, category} = item
  return (
    <>
      <h3>{name}</h3>
      <img src={image} alt={name}/>
      {category === "soup" ? null : <p><strong>Side: </strong>{side}</p>}
      <p>Price: ${price}</p>
      {children}
    </>
  );
}

export default FoodCard