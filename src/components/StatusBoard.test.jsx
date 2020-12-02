import React from "react";

import { render, screen } from "@testing-library/react";

import StatusBoard from "./StatusBoard";

describe("StatusBoard", () => {
  it("renders the name of the customer being consulted", () => {
    render(<StatusBoard customer="sogoagain" waitTime={20} />);

    const customerEl = screen.getByText(/\[띵동\] sogoagain 고객님/);

    expect(customerEl).toBeInTheDocument();
  });

  it("renders the expected wait time", () => {
    render(<StatusBoard customer="sogoagain" waitTime={20} />);

    const waitTimeEl = screen.getByText(/예상 대기 시간: 20초/);

    expect(waitTimeEl).toBeInTheDocument();
  });
});
