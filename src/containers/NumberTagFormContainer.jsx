import React from "react";

import { useDispatch, useSelector } from "react-redux";
import NumberTagForm from "../components/NumberTagForm";

import { setInputValue, enqueue } from "../features/appSlice";

export default function NumberTagFormContainer() {
  const { inputValue } = useSelector(({ app }) => app);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(enqueue());
  };

  const handleChange = (e) => {
    dispatch(setInputValue(e.target.value));
  };

  return (
    <NumberTagForm
      value={inputValue}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
