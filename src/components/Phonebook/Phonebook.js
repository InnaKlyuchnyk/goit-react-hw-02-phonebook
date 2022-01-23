import { Component } from "react";
import { nanoid } from "nanoid";
import Section from "./Section/Section";
import Filter from "./Filter/Filter";
import Form from "./Form/Form";
import PhoneBookList from "./PhoneBookList/PhoneBookList";

import { GlobalStyle } from "../constans/GlobalStyle";

export default class Phonebook extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log("не равно");
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = { id: nanoid(), name, number };

    if (
      !contacts.find(
        (contact) =>
          contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      this.setState(({ contacts }) => ({
        contacts: [newContact, ...contacts],
      }));
    } else {
      alert(`${newContact.name} is already in contacts`);
    }
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFiltredNames = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = (event) => {
    event.preventDefault();
    const idDeletedContact = event.currentTarget.id;
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== idDeletedContact
      ),
    }));
  };

  render() {
    const { filter } = this.state;
    const filtredNames = this.getFiltredNames();

    return (
      <div>
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmitHandler} />
        </Section>

        {this.state.contacts.length !== 0 && (
          <Section title="Contacts">
            <Filter value={filter} onChange={this.handleFilterChange} />
            <PhoneBookList
              filtredNames={filtredNames}
              onDeleteContact={this.deleteContact}
            />
          </Section>
        )}

        <GlobalStyle />
      </div>
    );
  }
}

// if (this.state.contacts.length === 0) {
//   this.setState({ contacts: [newContact] });

//   return;
// } else
