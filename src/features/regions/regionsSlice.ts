import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface RegionsState {
  value: {
    regions: { active: boolean; region: string }[];
  };
}

const initialState: RegionsState = {
  value: {
    regions: [
      { active: true, region: "Filter by Region" },
      { active: false, region: "Africa" },
      { active: false, region: "Americas" },
      { active: false, region: "Asia" },
      { active: false, region: "Europe" },
      { active: false, region: "Oceania" },
    ],
  },
};

export const regionSlice = createSlice({
  name: "regions",
  initialState,
  reducers: {
    changeRegion: (state, action: PayloadAction<string>) => {
      state.value.regions = [...state.value.regions].map((item) => {
        if (
          item.region.toLocaleLowerCase() === action.payload.toLocaleLowerCase()
        ) {
          return { ...item, active: true };
        } else {
          return { ...item, active: false };
        }
      });
    },
  },
});

export const { changeRegion } = regionSlice.actions;
export default regionSlice.reducer;
