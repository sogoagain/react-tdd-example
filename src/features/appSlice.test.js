import { getDefaultMiddleware } from "@reduxjs/toolkit";

import configureStore from "redux-mock-store";

import { enqueue, setInputValue, pushQueue } from "./appSlice";

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
      },
    };

    beforeEach(() => {
      store = mockStore(initialState);
    });

    it("add customer to the queue", () => {
      store.dispatch(enqueue());

      const actions = store.getActions();

      expect(actions[0]).toEqual(pushQueue({ number: 1, name: "홍길동" }));
      expect(actions[1]).toEqual(setInputValue(""));
    });
  });
});
