import { createSlice } from "@reduxjs/toolkit";
const initialthemeState = { isDarkmode: false };

const ThemeSlice = createSlice({
  name: "thememodechange",
  initialState: initialthemeState,
  reducers: {
    Darkmode(state) {
      state.isDarkmode = true;
      console.log("Darkmode");
    },
    Lightmode(state) {
      state.isDarkmode = false;
      console.log("Lightmode");
    },
  },
});

export const ThemeAction = ThemeSlice.actions;
export default ThemeSlice.reducer;
