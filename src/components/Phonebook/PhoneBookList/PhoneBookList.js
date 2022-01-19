import PhoneBookListItem from "../PhoneBookListItem/PhoneBookListItem";

export default function PhoneBookList({ filtredNames, onDeleteContact }) {
  return (
    <ul>
      {filtredNames.map(({ name, id, number }) => (
        <PhoneBookListItem
          key={id}
          name={name}
          number={number}
          id={id}
          onClick={onDeleteContact}
        />
      ))}
    </ul>
  );
}
