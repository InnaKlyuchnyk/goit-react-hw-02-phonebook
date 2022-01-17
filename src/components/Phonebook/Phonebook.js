import { Component } from "react/cjs/react.production.min";
import Section from "./Section/Section";

export default class Phonebook extends Component {
  state = {
    contacts: [],
    name: "",
  };

  handleNameChange = (event) => {
    this.setState({ name: event.currentTarget.value });
  };

  render() {
    const { name, contacts } = this.state;

    return (
      <div>
        <Section title="Phonebook">
          <form>
            <label>
              Name{" "}
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={this.handleNameChange}
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
        </Section>
        <Section title="Contacts">
          <ul>
            {contacts.map(({ name, id }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </Section>
      </div>
    );
  }
}
