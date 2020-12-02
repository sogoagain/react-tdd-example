import React from "react";

import { useSelector } from "react-redux";

import { render, screen } from "@testing-library/react";

import StatusBoardContainer from "./StatusBoardContainer";

jest.mock("react-redux");

describe("StatusBoardContainer", () => {
  useSelector.mockImplementation((selector) =>
    selector({
      app: {
        customer: "sogoagain",
        waitTime: 20,
        inputValue: "",
      },
    })
  );

  it("renders the name of the customer being consulted", () => {
    render(<StatusBoardContainer />);

    const customerEl = screen.getByText(/\[띵동\] sogoagain 고객님/);

    expect(customerEl).toBeInTheDocument();
  });

  it("renders the expected wait time", () => {
    render(<StatusBoardContainer />);

    const waitTimeEl = screen.getByText(/예상 대기 시간: 20초/);

    expect(waitTimeEl).toBeInTheDocument();
  });
});
