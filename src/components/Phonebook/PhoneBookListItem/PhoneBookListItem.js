export default function PhoneBookListItem({ id, name, number, onClick }) {
  return (
    <li>
      {name}: {number}
      <button type="button" id={id} onClick={onClick}>
        Delete
      </button>
    </li>
  );
}
