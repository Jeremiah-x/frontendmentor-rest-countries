import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  value: boolean;
}

const initialState: ThemeState = {
  value: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state) => {
      state.value = !state.value;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
