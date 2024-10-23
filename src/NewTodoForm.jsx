import { useState } from "react";

export function NewTodoForm({ onSubmit }) { // Receiving the onSubmit function as a prop
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // Prevents page from refreshing after submission/adding todo
    if (newItem === "") return; // If the input field is empty, do nothing

    onSubmit(newItem); // Pass the new item to the onSubmit function (from App.jsx)

    setNewItem(""); // Clear the input field after submission
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)} // Update state on input change
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
