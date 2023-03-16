import React, { Component } from 'react'
import css from './ContactForm.module.css'
import { nanoid } from 'nanoid'
import { PropTypes } from 'prop-types'


export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    onSubmit = (e) => {
        e.preventDefault();

        const contact = {
            name: this.state.name.trim(),
            number: this.state.number.trim(),
            id: `id-${nanoid()}`
        }
        if (!this.props.addContact(contact)) {
            return alert(`${contact.name} is already in contacts`)
        }

        this.setState({
            name: '',
            number: '',
        })
    }

    render() {
        const {number, name} = this.state;
        return (
            <div>
                <form action="" className={css.form} onSubmit={this.onSubmit}>
                    <label>Name</label>
                    <input
                        className={css.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        value={name}
                        onChange={(e) => this.setState((state) => ({ ...state, name: e.target.value }))}
                        required
                    />
                    <label>Number</label>
                    <input
                        className={css.input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        value={number}
                        onChange={(e) => this.setState((state) => ({ ...state, number: e.target.value }))}
                        required
                    />
                    <button type='submit' className={css.btn}>Add contact</button>
                </form>
            </div>
        )
    }
}

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
}
