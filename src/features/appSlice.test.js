import { getDefaultMiddleware } from "@reduxjs/toolkit";

import configureStore from "redux-mock-store";

import {
  enqueue,
  setInputValue,
  setCustomer,
  pushQueue,
  popQueue,
  increaseNumber,
  dequeue,
} from "./appSlice";

const mockStore = configureStore(getDefaultMiddleware());

describe("app", () => {
  let store;

  describe("enqueue", () => {
    const initialState = {
      app: {
        customer: "",
        inputValue: "홍길동",
        waitTime: 0,
        queue: [],
        number: 1,
      },
    };

    beforeEach(() => {
      store = mockStore(initialState);
    });

    it("add customer to the queue", () => {
      store.dispatch(enqueue());

      const actions = store.getActions();

      expect(actions[0]).toEqual(pushQueue({ number: 1, name: "홍길동" }));
      expect(actions[1]).toEqual(increaseNumber());
      expect(actions[2]).toEqual(setInputValue(""));
    });
  });

  describe("dequeue", () => {
    const initialState = {
      app: {
        customer: "",
        inputValue: "",
        waitTime: 0,
        queue: [{ number: 1, name: "홍길동" }],
        number: 1,
      },
    };

    beforeEach(() => {
      store = mockStore(initialState);
    });

    it("remove the customer from the queue", () => {
      store.dispatch(dequeue());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setCustomer("홍길동"));
      expect(actions[1]).toEqual(popQueue());
    });
  });
});
