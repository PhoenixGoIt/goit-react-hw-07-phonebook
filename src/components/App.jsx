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
    let isTwin = false;
  
    const foundContact = contacts.find(prevContact => {
      if (prevContact.name.toLowerCase() === name.toLowerCase()) {
        isTwin = true;
        return true;
      } else if (prevContact.phone.toLowerCase() === phone.toLowerCase()) {
        isTwin = true;
        return true;
      }
      return false;
    });
  
    if (isTwin) {
      if (foundContact.name.toLowerCase() === name.toLowerCase()) {
        alert(`${name}: Already in contact!`);
      } else if (foundContact.phone.toLowerCase() === phone.toLowerCase()) {
        alert(`${phone}: Already in contact!`);
      }
    } else {
      dispatch(addContact(newContact));
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('')
    setPhone('')
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
        <NameInput onChange={handleChangeName} value={name}/>
        <InFormName title="Number" />
        <NumberInput onChange={handleChangeNumber} value={phone}/>
        <AddBtn />
      </form>
      <h2>Contacts</h2>
      <FilterСontacts/>
      <ContactList />
    </div>
  );
}
