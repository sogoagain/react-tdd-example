import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { render, screen } from "@testing-library/react";

import QueueContainer from "./QueueContainer";

jest.mock("react-redux");

describe("QueueContainer", () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) =>
    selector({
      app: {
        customer: "sogoagain",
        waitTime: 15,
        inputValue: "",
        queue: [
          {
            number: 1,
            name: "홍길동",
          },
          {
            number: 2,
            name: "홍길순",
          },
        ],
      },
    })
  );

  beforeEach(() => {
    dispatch.mockClear();
  });

  it("renders the queue", () => {
    render(<QueueContainer />);

    ["홍길동", "홍길순"].forEach((name) => {
      const listItemEl = screen.getByText(new RegExp(name));
      expect(listItemEl).toBeInTheDocument();
    });
  });
});
