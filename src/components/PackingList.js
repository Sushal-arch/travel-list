import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteitems,
  onToggleitems,
  deleteAllItem,
}) {
  const [sortBy, setSortBy] = useState("input");
  let SortedItem;
  if (sortBy === "input") SortedItem = items;
  if (sortBy === "description") {
    SortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description)); // a ko description should come first as per this

    // if a ko description comes first it returns 1
    // if b came firts it returns -1
    // if both same then o
  }
  if (sortBy === "packed") {
    SortedItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
    // since we are comparing packed of a and b object which is boolean, we must convert it into number
  }
  return (
    <div className="list">
      <ul>
        {SortedItem.map((item) => (
          <Item
            item={item}
            onDeleteitems={onDeleteitems}
            onToggleitems={onToggleitems}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by alphabetic order</option>
          <option value="packed">Sort by packed order</option>
        </select>
        <button onClick={deleteAllItem}>Clear List</button>
      </div>
    </div>
  );
}
