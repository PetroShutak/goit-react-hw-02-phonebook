import PropType from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.listItem}>
          {name}: {number}
          <div className={css.button_wraper}>
          <button className={css.button} type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
          </div>
        </li>
      ))}
    </ul>
  );
  
  export default ContactList;

    ContactList.propTypes = {
        contacts: PropType.arrayOf(
            PropType.shape({
                id: PropType.string.isRequired,
                name: PropType.string.isRequired,
                number: PropType.string.isRequired,
            }),
        ),
        onDeleteContact: PropType.func.isRequired,
    };

