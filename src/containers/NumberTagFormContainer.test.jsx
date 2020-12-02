import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { render, screen, fireEvent } from "@testing-library/react";

import { setInputValue } from "../features/appSlice";

import NumberTagFormContainer from "./NumberTagFormContainer";

jest.mock("react-redux");

describe("NumberTagFormContainer", () => {
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

  it("renders the form that pulls the number tag", () => {
    render(<NumberTagFormContainer />);

    const inputEl = screen.getByLabelText(/이름/);
    const buttonEl = screen.getByRole("button", { name: "뽑기" });

    fireEvent.change(inputEl, { target: { value: "sogoagain" } });
    fireEvent.submit(buttonEl);

    expect(dispatch).toHaveBeenCalledWith(setInputValue("sogoagain"));
    expect(dispatch).toHaveBeenCalledWith(setInputValue(""));
    expect(dispatch).toBeCalledTimes(3);
  });
});
