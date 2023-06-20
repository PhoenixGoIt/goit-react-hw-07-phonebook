// Один і той же селектор може використовуватися в декількох місцях програми, що призводить до дублювання коду. Щоб уникнути цього та ще більше структурувати код, всі функції-селектори оголошуються в окремому файлі, після чого імпортуються до компонентів.

import { createSelector } from '@reduxjs/toolkit';


export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectvisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizeFilter = filter.toLocaleLowerCase();
    const visibleContacts = contacts
      ?.filter(contact =>
        contact?.name?.toLocaleLowerCase().includes(normalizeFilter)
      )
      .sort((firstName, secondName) =>
        firstName.name.localeCompare(secondName.name)
      );
    return visibleContacts;
  }
);