import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Pete Che', number: '459-12-56' },
      { id: 'id-2', name: 'Toha Aladin', number: '443-89-12' },
      { id: 'id-3', name: 'Golden Fish', number: '645-17-79' },
      { id: 'id-4', name: 'Tati Tereshenko', number: '227-91-26' },
      { id: 'id-5', name: 'Sergiy Kotkov', number: '217-91-29' },
      { id: 'id-6', name: 'Barcode', number: '287-91-26' },
      { id: 'id-7', name: 'Shutak P', number: '217-91-26' },
    ],
    filter: '',
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  handleAddContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className={css.wraper}>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} onAddContact={this.handleAddContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
