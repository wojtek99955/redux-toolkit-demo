import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
  },
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },

    deleteLast: (state) => {
      state.notes.pop();
    },
  },
});

export const { addNote, deleteLast } = notesSlice.actions;
export default notesSlice.reducer;
