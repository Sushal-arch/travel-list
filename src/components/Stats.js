export default function Stats({ items }) {
  if (!items.length) {
    return (
      <em className="stats">Start adding your items in your packing list</em>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const Percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {Percentage === 100
        ? `You are ready to go ✈️`
        : `You have ${numItems} items on your Lists, and you already packed ${" "}
        ${numPacked} (${Percentage}%)`}
    </footer>
  );
}
