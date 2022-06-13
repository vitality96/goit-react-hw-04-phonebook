import PropTypes from 'prop-types';
import s from './ContactListItem.module.css'

const ContactListItem = ({ children }) => {
    return (
        <li className={s.item}>
            {children}
        </li>
    );
};

export default ContactListItem;


ContactListItem.propTypes = {
    children: PropTypes.node.isRequired,
}