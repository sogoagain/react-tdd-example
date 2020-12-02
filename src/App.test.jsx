import React from "react";

import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders title", () => {
    render(<App />);

    const titleEl = screen.getByText(/iPortfolio 은행/);

    expect(titleEl).toBeInTheDocument();
  });
});
