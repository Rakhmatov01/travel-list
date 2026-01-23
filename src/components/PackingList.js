import Item from "./Item";
import { useState } from "react";
export default function PackingList({
  items,
  handleDelete,
  handleToggle,
  handleClear,
}) {
  const [sortBy, setSortBy] = useState("");
  let sortedItems = [...items];
  if (sortBy === "input") sortedItems = items.slice();
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => a.packed - b.packed);

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}
