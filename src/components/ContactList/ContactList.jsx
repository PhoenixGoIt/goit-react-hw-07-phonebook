import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteContact } from '../redux/contactsSlises'


// const getVisibleTasks = (contacts, filter) => {
//   const normilizedFilter = filter.toLowerCase();
//   return contacts.filter(contact =>
//     contact.text['name'].toLowerCase().includes(normilizedFilter)
//   );
// };

export const ContactList = () => {
  const contacts = useSelector(state  => state.contacts.contacts)
  const filter = useSelector(state  => state.filter.filter)
  const dispatch = useDispatch()
  console.log(filter)
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
    return(
        <ul >
      {filteredContacts.length ? (
        filteredContacts.map(({ id, name, number }) => (
          <li  key={id}>
            <span >{name}: </span>
            <span >{number}</span>
            <button
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <h3>There are no contacts in your book</h3>
      )}
    </ul>
    )
}
