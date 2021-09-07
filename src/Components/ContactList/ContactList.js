import { connect } from 'react-redux';
import ContactListItem from '../ContactListItem/ContactListItem';
import * as actions from '../../redux/actions';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => (
        <ContactListItem
          name={name}
          key={id}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  //filter: state.contacts.filter,
  contacts: state.contacts.items.filter(item =>
    item.name.toLowerCase().includes(state.contacts.filter.toLowerCase()),
  ),
});
const mapDispatchToProps = dispatch => ({
  onDeleteContact: contactId => dispatch(actions.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
