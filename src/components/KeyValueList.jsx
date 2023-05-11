export default function KeyValueList({ items }) {
  return (
    <ul className="key-value-list">
      {items.map((item) => (
        <li key={item.key}>
          <strong className="name">{item.key}:</strong>{" "}
          <span className="content">{item.value}</span>
        </li>
      ))}
    </ul>
  );
}
