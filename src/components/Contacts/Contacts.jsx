import React, { Component } from 'react'
import css from './Contacts.module.css'

export default class Contacts extends Component {
    render() {
        const { deleteContact, contacts } = this.props;
        return (
            <ul className={css.contactList}>
                {contacts.map(contact =>
                    <li key={contact.id} className={css.contactItem}>
                        <p
                            className={css.contactName}> {contact.name}: {contact.number}</p>
                        <button
                            type='button'
                            onClick={() => deleteContact(contact.id)}
                            className={css.contactBtn}>Delete</button>
                    </li>
                )}
            </ul>
        )
    }
}
