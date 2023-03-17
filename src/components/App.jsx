import React, { Component } from 'react'
import ContactForm from './ContactForm/ContactForm'
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import Section from './Section/Section'
import contacts from '../contacts.json'

export default class App extends Component {
  state = {
    contacts: localStorage.getItem('contacts') ? JSON.parse(localStorage.getItem('contacts')) : contacts,
    filter: '',
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
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
