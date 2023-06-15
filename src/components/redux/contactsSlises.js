import { createSlice } from "@reduxjs/toolkit";

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: initialContacts,
},
  reducers: {
    addContact: (state, action) => {
        state.contacts.push(action.payload)
    },

    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
    },
    filterСontacts: (state, action) => {
      state.filter = state.contacts.filter(contact => contact.name.toLowerCase().includes(action.payload.toLowerCase()));
    },
  },
});

export const {addContact, deleteContact, filterСontacts} = contactsSlice.actions
export default contactsSlice.reducer
