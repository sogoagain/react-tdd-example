import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "app",
  initialState: {
    customer: "",
    inputValue: "",
    waitTime: 0,
  },
  reducers: {
    setInputValue: (state, { payload: inputValue }) => ({
      ...state,
      inputValue,
    }),
  },
});

export const { setInputValue } = actions;

export default reducer;
