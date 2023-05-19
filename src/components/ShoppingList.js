import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory,setSelectedCategory]=useState("All")
function handleChange(e){
  setSelectedCategory(e.target.value)
}

const newListArray=items.filter((item)=>{
  if(selectedCategory==="All"){
   return items;
  //  return all_items.map((item)=>{
  //   // return <Item key={item.id} name={item.name} category={item.category} /> 
  //  });
  }else{
    return selectedCategory===item.category;
  }})
  return (
    <div className="ShoppingList">
      <div className="Filter" onChange={handleChange}>
        <select name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newListArray.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
