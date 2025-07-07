import React from "react";
import { useState } from "react";

export const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !quantity) {
      alert("Please fill in both fields");
      return;
    }

    const newItem = { name, quantity: parseInt(quantity) };
    setItems((prevItem) => [...prevItem, newItem]);
    setName("");
    setQuantity("");
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>

      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            {item.name} - Quantity : {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};
