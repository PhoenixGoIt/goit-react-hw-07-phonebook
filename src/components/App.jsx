import { useState } from 'react';
import { nanoid } from 'nanoid';
import { InFormName } from './InFormName/InFormName';
import { NumberInput } from './NumberInput/NumberInput';
import { NameInput } from './NameInput/NameInput';
import { AddBtn } from './AddBtn/AddBtn';
import { ContactList } from './ContactList/ContactList';
import { FilterСontacts } from './FilterСontacts/FilterСontacts';
import { useSelector } from 'react-redux';
import { addContact } from './redux/contactsSlises'
import { deleteContact } from './redux/contactsSlises'
import { useDispatch } from 'react-redux';

export function App() {
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch()
  const contacts = useSelector(state => state.contacts.contacts)

  const handleChangeName = (e) => {
    setName(e);

  };

  const handleChangeNumber = (e) => {
    setNumber(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setNumber('');
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    if (contacts.filter((contact) => contact.name.toLowerCase().trim() === newContact.name.toLowerCase().trim()).length) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    else if(contacts.filter((contact) => contact.number.trim() === newContact.number.trim()).length) {
      alert(`${newContact.number} is already in contacts`);
      return;
    }
    dispatch(addContact(newContact))

    
  };

  const changeFilter = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={handleSubmit}>
        <InFormName  title="Name" />
        <NameInput value={name} onChange={handleChangeName} />
        <InFormName title="Number" />
        <NumberInput value={number} onChange={handleChangeNumber} />
        <AddBtn />
      </form>
      <h2>Contacts</h2>
      <FilterСontacts onChange={changeFilter} filter={filter} />
      <ContactList onClick={deleteContact} />
    </div>
  );
}
