import React, { Component } from 'react'
import ContactForm from './ContactForm/ContactForm'
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import Section from './Section/Section'

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  addContact = (obj) => {
    if (this.state.contacts.findIndex(contact => contact.name.trim().toLowerCase() === obj.name.trim().toLowerCase()) >= 0) {
      return false
    }

    this.setState((state) =>
      ({ ...state, contacts: [...state.contacts, obj] })
    );
    return true
  };

  deleteContact = (id) => {
    this.setState((state) =>
    ({
      ...state, contacts: state.contacts.filter(contact =>
        contact.id !== id)
    }))
  }

  updateFilterState = (filter) => {
    this.setState(state => ({ ...state, filter }))
  }

  render() {
    const { filter, contacts, } = this.state;
    const filtered = filter.trim() ? contacts.filter(contact => contact.name.toLowerCase().includes(filter.trim().toLowerCase())) : contacts;

    return (
      <div>
        <Section>
          <h1>Phonebook</h1>
          <ContactForm addContact={this.addContact} />
        </Section>

        <Section>
          <h2>Contacts</h2>
          <Filter updateFilterState={this.updateFilterState} filter={filter} />
          <Contacts contacts={filtered} deleteContact={this.deleteContact} />
        </Section>
      </div>
    )
  }
}
