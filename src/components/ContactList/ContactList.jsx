import { deleteContact, fetchContacts } from "components/redux/operations";
import { selectContacts, selectError, selectFilter, selectIsLoading, selectvisibleContacts  } from "components/redux/selectors";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";



// const getVisibleTasks = (contacts, filter) => {
//   const normilizedFilter = filter.toLowerCase();
//   return contacts.filter(contact =>
//     contact.text['name'].toLowerCase().includes(normilizedFilter)
//   );
// };
 //const filter = useSelector(state  => state.filter.filter)
export const ContactList = () => {
  
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter)
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return(
        <ul >
      {contacts.length ? (
        contacts.map(({id, name, phone}) => (
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
