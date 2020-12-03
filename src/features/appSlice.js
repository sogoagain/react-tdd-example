import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "app",
  initialState: {
    customer: "",
    inputValue: "",
    waitTime: 0,
    queue: [],
    number: 1,
  },
  reducers: {
    setInputValue: (state, { payload: inputValue }) => ({
      ...state,
      inputValue,
    }),
    pushQueue: (state, { payload: item }) => ({
      ...state,
      queue: [...state.queue, item],
    }),
    increaseNumber: (state) => ({
      ...state,
      number: state.number + 1,
    }),
  },
});

export const { setInputValue, pushQueue, increaseNumber } = actions;

export function enqueue() {
  return function (dispatch, getState) {
    const {
      app: { number, inputValue },
    } = getState();

    dispatch(pushQueue({ number, name: inputValue }));
    dispatch(increaseNumber());
    dispatch(setInputValue(""));
  };
}
export default reducer;
