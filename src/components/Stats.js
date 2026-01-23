export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your list 🚀</em>
      </footer>
    );
  }

  let length = items.length;
  let packedLength = items.reduce((acc, item) => acc + item.packed, 0);
  let percent = Math.round((packedLength / length) * 100);
  console.log(packedLength);
  if (percent === 100) {
    return (
      <footer className="stats">
        <em>Perfect! You successfully completed all items 🔥</em>
      </footer>
    );
  }
  return (
    <footer className="stats">
      <em>
        You have {length} items on your list, and you already packed{" "}
        {packedLength} ({percent}%)
      </em>
    </footer>
  );
}
