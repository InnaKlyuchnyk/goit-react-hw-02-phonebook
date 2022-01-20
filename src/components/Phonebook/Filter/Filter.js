import PropTypes from "prop-types";
import { FilterLabel, Input } from "./Filter.styled";

export default function Filter({ value, onChange }) {
  return (
    <FilterLabel>
      Find contacts by name
      <Input
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={value}
        onChange={onChange}
      />
    </FilterLabel>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
