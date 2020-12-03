import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "app",
  initialState: {
    customer: "",
    inputValue: "",
    waitTime: 0,
    queue: [],
  },
  reducers: {
    setInputValue: (state, { payload: inputValue }) => ({
      ...state,
      inputValue,
    }),
  },
});

export const { setInputValue } = actions;

export function enqueue() {
  return function (dispatch, getState) {
    return;
  };
}
export default reducer;
