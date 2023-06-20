import { configureStore } from "@reduxjs/toolkit";
import {contactsReducer} from './contactsSlises'
import filter from './filterSlice'
import storage from 'redux-persist/lib/storage'
import {persistStore, persistReducer} from "redux-persist";

const persistConfig = {
  key: 'contacts',
  storage,
} 


const persistedReducer = persistReducer(persistConfig, contactsReducer)

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filter,
  },
});

export const persistor = persistStore(store)