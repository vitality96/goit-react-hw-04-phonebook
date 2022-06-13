import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className={s.list}>
            {contacts.map(({ id, name, number }) => (
                <ContactListItem key={id}>
                    {name}: {number}
                    <button className={s.button} type="button" onClick={() => onDeleteContact(id)}>
                        Delete
                    </button>
                </ContactListItem>
            ))}
        </ul>
    );
};


export default ContactList;


ContactList.protoType = {
    onDeleteContact: PropTypes.func,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.number.isRequired,
        })
    )
};