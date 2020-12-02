import React from "react";

import { useSelector } from "react-redux";

import { render, screen } from "@testing-library/react";

import App from "./App";

jest.mock("react-redux");

describe("App", () => {
  useSelector.mockImplementation((selector) =>
    selector({
      customer: "sogoagain",
    })
  );

  it("renders title", () => {
    render(<App />);

    const titleEl = screen.getByText(/iPortfolio 은행/);

    expect(titleEl).toBeInTheDocument();
  });

  it("renders greetings", () => {
    render(<App />);

    const greetingEl = screen.getByText(/고객님, 오늘도 행복한 하루 되세요./);

    expect(greetingEl).toBeInTheDocument();
  });

  it("renders the name of the customer being consulted", () => {
    render(<App />);

    const customerEl = screen.getByText(/\[띵동\] sogoagain 고객님/);

    expect(customerEl).toBeInTheDocument();
  });
});
