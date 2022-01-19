export default function Filter({ value, onChange }) {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
