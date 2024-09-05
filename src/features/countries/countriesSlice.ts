import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../assets/data";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICountry } from "../../interfaces/countries.interface";

export interface CountriesState {
  value: ICountry[];
}

const initialState: CountriesState = {
  value: data,
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    filterCountries: (state, action: PayloadAction<string>) => {
      if (action.payload === "Filter by Region") state.value = data;
      else {
        state.value = [...data].filter(
          (item) => item.region === action.payload
        );
      }
    },

    filterCountriesWhenInputChange: (state, action: PayloadAction<string>) => {
      if (action.payload === "") {
        state.value = data;
      } else {
        state.value = [...data].filter((item: ICountry) =>
          item.name?.toLowerCase().startsWith(action.payload.toLowerCase())
        );
      }
    },
  },
});

export const { filterCountries, filterCountriesWhenInputChange } =
  countriesSlice.actions;
export default countriesSlice.reducer;
