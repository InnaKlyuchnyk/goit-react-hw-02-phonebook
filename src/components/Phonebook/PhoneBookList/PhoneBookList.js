import PropTypes from "prop-types";
import PhoneBookListItem from "../PhoneBookListItem/PhoneBookListItem";
import { ContactList } from "./PhoneBookList.styled";

export default function PhoneBookList({ filtredNames, onDeleteContact }) {
  return (
    <ContactList>
      {filtredNames.map(({ name, id, number }) => (
        <PhoneBookListItem
          key={id}
          name={name}
          number={number}
          id={id}
          onClick={onDeleteContact}
        />
      ))}
    </ContactList>
  );
}

PhoneBookList.propTypes = {
  filtredNames: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
