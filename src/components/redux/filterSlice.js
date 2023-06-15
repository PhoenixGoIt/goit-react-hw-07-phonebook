import { createSlice } from "@reduxjs/toolkit";
const initialFilter = ''

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
      filter: initialFilter
  },
    reducers: {
      setFilter: (state, action) => {
        state.filter = action.payload;
        return state;
      }
    },
  });
  
  export const {setFilter} = filterSlice.actions
  export default filterSlice.reducer
  