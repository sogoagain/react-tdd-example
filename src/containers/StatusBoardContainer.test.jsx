import React from "react";

import { useSelector } from "react-redux";

import { render, screen } from "@testing-library/react";

import StatusBoardContainer from "./StatusBoardContainer";

jest.mock("react-redux");

describe("StatusBoardContainer", () => {
  useSelector.mockImplementation((selector) =>
    selector({
      customer: "sogoagain",
    })
  );

  it("renders the name of the customer being consulted", () => {
    render(<StatusBoardContainer />);

    const customerEl = screen.getByText(/\[띵동\] sogoagain 고객님/);

    expect(customerEl).toBeInTheDocument();
  });
});
