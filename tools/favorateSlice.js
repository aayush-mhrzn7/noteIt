/* import { createSlice } from "@reduxjs/toolkit";

const favorateSlice = createSlice({
  name: "favorate",
  initialState: new Set(),
  reducers: {
    toggleFavorate: (state, action) => {
      const noteId = action.payload;
      if (state.has(noteId)) {
        state.delete(noteId);
      } else {
        state.add(noteId);
      }
    },
  },
});
export const { toggleFavorite } = favorateSlice.actions;
export default favorateSlice.reducer;
 */
