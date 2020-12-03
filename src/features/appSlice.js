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
    setCustomer: (state, { payload: customer }) => ({
      ...state,
      customer,
    }),
    pushQueue: (state, { payload: item }) => ({
      ...state,
      queue: [...state.queue, item],
    }),
    popQueue: (state) => ({
      ...state,
      queue: [...state.queue.slice(1)],
    }),
    increaseNumber: (state) => ({
      ...state,
      number: state.number + 1,
    }),
  },
});

export const {
  setInputValue,
  setCustomer,
  pushQueue,
  popQueue,
  increaseNumber,
} = actions;

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

export function dequeue() {
  return function (dispatch, getState) {
    const {
      app: { queue },
    } = getState();

    dispatch(setCustomer(queue[0].name));
    dispatch(popQueue());
  };
}

export default reducer;
