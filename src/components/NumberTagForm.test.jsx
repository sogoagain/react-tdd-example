import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";

import NumberTagForm from "./NumberTagForm";

describe("NumberTagForm", () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  beforeEach(() => {
    handleSubmit.mockClear();
    handleChange.mockClear();
  });

  it("renders the form that pulls the number tag", () => {
    render(
      <NumberTagForm
        value="홍길동"
        onSubmit={handleSubmit}
        onChange={handleChange}
      />,
    );

    const inputEl = screen.getByLabelText(/이름/);
    const buttonEl = screen.getByRole("button", { name: "뽑기" });

    fireEvent.change(inputEl, { target: { value: "sogoagain" } });
    fireEvent.submit(buttonEl);

    expect(handleChange).toBeCalled();
    expect(handleSubmit).toBeCalled();
  });
});
