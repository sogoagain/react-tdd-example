import React from "react";

import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
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
});
