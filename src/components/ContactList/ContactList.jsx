import { deleteContact, fetchContacts } from "components/redux/operations";
import { selectContacts, selectFilter} from "components/redux/selectors";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";



export const ContactList = () => {
  
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter)
  const dispatch = useDispatch()
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.filter)
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return(
        <ul >
      {filteredContacts.length ? (
        filteredContacts.map(({id, name, phone}) => (
          <li  key={id}>
            <span >{name}: </span>
            <span >{phone}</span>
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
