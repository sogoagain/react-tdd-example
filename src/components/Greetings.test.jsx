import React from "react";

import { render, screen } from "@testing-library/react";

import Greetings from "./Greetings";

describe("Greetings", () => {
  it("renders greetings", () => {
    render(<Greetings />);

    const greetingEl = screen.getByText(/고객님, 오늘도 행복한 하루 되세요./);

    expect(greetingEl).toBeInTheDocument();
  });
});
