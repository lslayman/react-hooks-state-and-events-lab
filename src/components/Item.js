import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, putInCart] = useState(false);

  function handleCart() {
    putInCart((inCart) => !inCart)
  }

  
  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove" : "add"} 
      onClick={handleCart}>
        {inCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
