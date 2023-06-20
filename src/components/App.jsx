import { InFormName } from './InFormName/InFormName';
import { NumberInput } from './NumberInput/NumberInput';
import { NameInput } from './NameInput/NameInput';
import { AddBtn } from './AddBtn/AddBtn';
import { ContactList } from './ContactList/ContactList';
import { FilterСontacts } from './FilterСontacts/FilterСontacts';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from './redux/operations';

export function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch()
  const handleChangeName = (e) => {
    setName(e);
  };

  const handleChangeNumber = (e) => {
    setPhone(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const newContact = {
      name,
      phone,
    };
    dispatch(addContact(newContact))
  }
  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={handleSubmit}>
        <InFormName  title="Name" />
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


// e.preventDefault();
//     setName('');
//     setNumber('');
//     const newContact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     if (contacts.filter((contact) => contact.name.toLowerCase().trim() === newContact.name.toLowerCase().trim()).length) {
//       alert(`${newContact.name} is already in contacts`);
//       return;
//     }
//     else if(contacts.filter((contact) => contact.number.trim() === newContact.number.trim()).length) {
//       alert(`${newContact.number} is already in contacts`);
//       return;
//     }