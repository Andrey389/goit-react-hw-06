import { createSlice } from "@reduxjs/toolkit";

const FilterSlice = createSlice({
  name: "filters",
  initialState: {
    status: "",
  },
  reducers: {
    setStatusFilter: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = FilterSlice.actions;
export const FilterReduser = FilterSlice.reducer;
