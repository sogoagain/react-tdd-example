import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { render, screen, fireEvent } from "@testing-library/react";

import { setInputValue } from "../features/appSlice";

import BankPage from "./BankPage";

jest.mock("react-redux");

describe("BankPage", () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) =>
    selector({
      app: {
        customer: "sogoagain",
        waitTime: 15,
        inputValue: "",
        queue: [
          {
            number: 1,
            name: "홍길동",
          },
          {
            number: 2,
            name: "홍길순",
          },
        ],
        number: 1,
      },
    }),
  );

  beforeEach(() => {
    dispatch.mockClear();
  });

  beforeAll(() => {
    jest.useFakeTimers();
  });

  it("renders title", () => {
    render(<BankPage />);

    const titleEl = screen.getByText(/iPortfolio 은행/);

    expect(titleEl).toBeInTheDocument();
  });

  it("renders greetings", () => {
    render(<BankPage />);

    const greetingEl = screen.getByText(/고객님, 오늘도 행복한 하루 되세요./);

    expect(greetingEl).toBeInTheDocument();
  });

  it("renders the name of the customer being consulted", () => {
    render(<BankPage />);

    const customerEl = screen.getByText(/\[띵동\] sogoagain 고객님/);

    expect(customerEl).toBeInTheDocument();
  });

  it("renders the expected wait time", () => {
    render(<BankPage />);

    const waitTimeEl = screen.getByText(/예상 대기 시간: 15초/);

    expect(waitTimeEl).toBeInTheDocument();
  });

  it("renders the form that pulls the number tag", () => {
    render(<BankPage />);

    const inputEl = screen.getByLabelText(/이름/);
    const buttonEl = screen.getByRole("button", { name: "뽑기" });

    fireEvent.change(inputEl, { target: { value: "sogoagain" } });
    fireEvent.submit(buttonEl);

    expect(dispatch).toHaveBeenCalledWith(setInputValue("sogoagain"));
    expect(dispatch).toBeCalledTimes(2);
  });

  it("renders the queue", () => {
    render(<BankPage />);

    ["홍길동", "홍길순"].forEach((name) => {
      const listItemEl = screen.getByText(new RegExp(name));
      expect(listItemEl).toBeInTheDocument();
    });
  });

  context("when there are customers in the queue", () => {
    it("calls the customer every 3 seconds", () => {
      render(<BankPage />);

      jest.advanceTimersByTime(5999);

      expect(dispatch).toBeCalledTimes(1);
    });
  });
});
