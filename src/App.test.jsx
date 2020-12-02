import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { render, screen, fireEvent } from "@testing-library/react";

import { setInputValue } from "./features/appSlice";

import App from "./App";

jest.mock("react-redux");

describe("App", () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) =>
    selector({
      app: {
        customer: "sogoagain",
        waitTime: 15,
        inputValue: "",
      },
    })
  );

  beforeEach(() => {
    dispatch.mockClear();
  });

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

  it("renders the expected wait time", () => {
    render(<App />);

    const waitTimeEl = screen.getByText(/예상 대기 시간: 15초/);

    expect(waitTimeEl).toBeInTheDocument();
  });

  it("renders the form that pulls the number tag", () => {
    render(<App />);

    const inputEl = screen.getByLabelText(/이름/);
    const buttonEl = screen.getByRole("button", { name: "뽑기" });

    fireEvent.change(inputEl, { target: { value: "sogoagain" } });
    fireEvent.submit(buttonEl);

    expect(dispatch).toHaveBeenCalledWith(setInputValue("sogoagain"));
    expect(dispatch).toHaveBeenCalledWith(setInputValue(""));
  });
});
