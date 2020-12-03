import React from "react";

import { render, screen } from "@testing-library/react";

import Queue from "./Queue";

describe("Queue", () => {
  it("renders the queue", () => {
    const queue = [{ number: 1, name: "홍길동" }, { number: 2, name: "홍길순" }];

    render(<Queue queue={queue} />);

    queue.forEach(({ name }) => {
      const listItemEl = screen.getByText(new RegExp(name));
      expect(listItemEl).toBeInTheDocument();
    });
  });
});
