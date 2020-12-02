import React from "react";

import { render, screen } from "@testing-library/react";

import Title from "./Title";

describe("Title", () => {
  it("renders title", () => {
    render(<Title />);

    const titleEl = screen.getByText(/iPortfolio 은행/);

    expect(titleEl).toBeInTheDocument();
  });
});
