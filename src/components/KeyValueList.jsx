export default function KeyValueList({ items }) {
  return (
    <ul className="key-value-list">
      {items?.map((item) => (
        <li key={item.key}>
          <strong className="key">{item.key}:</strong>{" "}
          <span className="value">{item.value || <i>{"X".repeat(8)}</i>}</span>
        </li>
      ))}
    </ul>
  );
}
