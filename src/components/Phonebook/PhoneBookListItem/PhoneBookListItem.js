import PropTypes from "prop-types";
import { Contact, DeleteButton } from "./PhoneBookListItem.styled";

export default function PhoneBookListItem({ id, name, number, onClick }) {
  return (
    <Contact>
      {name}: {number}
      <DeleteButton type="button" id={id} onClick={onClick}>
        Delete
      </DeleteButton>
    </Contact>
  );
}

PhoneBookListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
