import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme/themeSlice";
import regionsReducer from "./features/regions/regionsSlice";
import countriesSlice from "./features/countries/countriesSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    regions: regionsReducer,
    countries: countriesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
