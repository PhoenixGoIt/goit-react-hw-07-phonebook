import { InFormName } from './InFormName/InFormName';
import { NumberInput } from './NumberInput/NumberInput';
import { NameInput } from './NameInput/NameInput';
import { AddBtn } from './AddBtn/AddBtn';
import { ContactList } from './ContactList/ContactList';
import { FilterСontacts } from './FilterСontacts/FilterСontacts';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from './redux/operations';
import { useSelector } from "react-redux";
import { selectContacts } from "components/redux/selectors";

export function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChangeName = (e) => {
    setName(e);
  };

  const handleChangeNumber = (e) => {
    setPhone(e);
  };

  const twinCheck = (name, phone, newContact) => {
    let isTwin = contacts.find(prevContact => {
      if (prevContact.name.toLocaleLowerCase() === name.toLocaleLowerCase()) {
        alert(`${name}: Already in contact!`)
        return true
      }
      else if(prevContact.phone.toLocaleLowerCase() === phone) {
        alert(`${phone}: Already in contact!`)
        return true
      }
    });
    if (!isTwin) {
      dispatch(addContact(newContact));
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name,
      phone,
    };
    twinCheck(name, phone, newContact);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={handleSubmit}>
        <InFormName title="Name" />
        <NameInput onChange={handleChangeName}/>
        <InFormName title="Number" />
        <NumberInput onChange={handleChangeNumber}/>
        <AddBtn />
      </form>
      <h2>Contacts</h2>
      <FilterСontacts/>
      <ContactList />
    </div>
  );
}
