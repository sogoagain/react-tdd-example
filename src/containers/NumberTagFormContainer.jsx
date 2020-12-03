import React from "react";

import { useDispatch, useSelector } from "react-redux";

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="input-name">이름</label>
      <input
        type="text"
        name="name"
        id="input-name"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">뽑기</button>
    </form>
  );
}
