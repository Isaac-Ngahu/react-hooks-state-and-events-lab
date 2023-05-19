import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart,setInCart]=useState(false)
function handleClick(){
  setInCart(!inCart)
}
  const newClassName=inCart ? "in-cart":"";
  return (
    <li className={newClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{inCart ? "Remove From Cart":"Add to cart"}</button>
    </li>
  );
}

export default Item;
