import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './ContactBook.module.css'

export class ContactBook extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };
  
  handleNumberChange = event => {
    this.setState({ number: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, contacts, number } = this.state;
    if (name.trim() !== '' && number.trim() !== '') {
      const newContact = {
        id: nanoid(),
        name: name.trim(),
        number: number.trim()
      };
      this.setState({
        contacts: [...contacts, newContact],
        name: '',
        number: ''
      });
    }
  };

  render() {
    const { name, contacts, number } = this.state;
  
    return (
      <div className={css.contactBook}>
        <h1 className={css.heading}>Phone Contact Book</h1>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <label htmlFor="name" className={css.label}>
            Name:
          </label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleNameChange}
            className={css.input}
          />
          <label htmlFor="number" className={css.label}>
            Number:
          </label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleNumberChange}
            className={css.input}
          />
          <button type="submit" className={css.button}>
            Add Contact
          </button>
        </form>
        <h2 className={css.heading}>Contact List</h2>
        {contacts.length === 0 ? (
          <p className={css.message}>No contacts available</p>
        ) : (
          <ul className={css.list}>
            {contacts.map(contact => (
              <li key={contact.id} className={css.listItem}>
                {contact.name} - {contact.number}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

ContactBook.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ),
  name: PropTypes.string.isRequired,
};

// import { useState } from 'react';
// import { nanoid } from 'nanoid';
// // import css from './ContactBook.module.css';

// export function ContactBook() {
//   const [contacts, setContacts] = useState([]);
//   const [name, setName] = useState('');

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (name.trim() !== '') {
//       const newContact = {
//         id: nanoid(),
//         name: name.trim()
//       };
//       setContacts([...contacts, newContact]);
//       setName('');
//     }
//   };

//   return (
//     <div>
//       <h1>Phone Contact Book</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           value={name}
//           onChange={handleNameChange}
//         />
//         <button type="submit">Add Contact</button>
//       </form>
//       <h2>Contact List</h2>
//       {contacts.length === 0 ? (
//         <p>No contacts available</p>
//       ) : (
//         <ul>
//           {contacts.map((contact) => (
//             <li key={contact.id}>{contact.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
