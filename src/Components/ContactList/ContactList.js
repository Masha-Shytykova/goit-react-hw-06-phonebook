import { useSelector, useDispatch } from 'react-redux';
import ContactListItem from '../ContactListItem/ContactListItem';
import * as actions from '../../redux/actions';

function ContactList() {
  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.items);

  const dispatch = useDispatch();

  return (
    <ul>
      {contacts
        .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ name, id, number }) => (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            onDeleteContact={() => dispatch(actions.deleteContact(id))}
          />
        ))}
    </ul>
  );
}

export default ContactList;

///////////////redux
// import { connect } from 'react-redux';
// import ContactListItem from '../ContactListItem/ContactListItem';
// import * as actions from '../../redux/actions';
// import PropTypes from 'prop-types';

// const ContactList = ({ contacts, onDeleteContact }) => {
//   return (
//     <ul>
//       {contacts.map(({ name, id, number }) => (
//         <ContactListItem
//           key={id}
//           name={name}
//           number={number}
//           onDeleteContact={() => onDeleteContact(id)}
//         />
//       ))}
//     </ul>
//   );
// };

// const mapStateToProps = state => ({
//   contacts: state.contacts.items.filter(item =>
//     item.name.toLowerCase().includes(state.contacts.filter.toLowerCase()),
//   ),
// });
// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: contactId => dispatch(actions.deleteContact(contactId)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
