import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export class ContactBook extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, contacts } = this.state;
    if (name.trim() !== '') {
      const newContact = {
        id: nanoid(),
        name: name.trim(),
      };
      this.setState({
        contacts: [...contacts, newContact],
        name: '',
      });
    }
  };

  render() {
    const { name, contacts } = this.state;

    return (
      <div>
        <h1>Phone Contact Book</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleNameChange}
          />
          <button type="submit">Add Contact</button>
        </form>
        <h2>Contact List</h2>
        {contacts.length === 0 ? (
          <p>No contacts available</p>
        ) : (
          <ul>
            {contacts.map(contact => (
              <li key={contact.id}>{contact.name}</li>
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
