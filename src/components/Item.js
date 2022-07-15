import { useState } from "react";
import React from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState (false)

  function handleCartAddClick() {
    setIsInCart(isInCart => !isInCart)
  }
  return (
    <li className={isInCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartAddClick} 
        className = {isInCart ? 'remove': 'add'} 
      >
        {isInCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}


export default Item;
