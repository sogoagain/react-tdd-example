import React from "react";

import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("renders title", () => {
    render(<App />);

    const titleEl = screen.getByText(/iPortfolio 은행/);

    expect(titleEl).toBeInTheDocument();
  });
});
