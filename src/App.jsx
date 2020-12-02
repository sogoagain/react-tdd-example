import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { setInputValue } from "./features/appSlice";

import Title from "./components/Title";
import Greetings from "./components/Greetings";

import StatusBoardContainer from "./containers/StatusBoardContainer";

export default function App() {
  const { inputValue } = useSelector(({ app }) => app);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setInputValue(""));
  };

  const handleChange = (e) => {
    dispatch(setInputValue(e.target.value));
  };

  return (
    <>
      <Title />
      <Greetings />
      <StatusBoardContainer />
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
    </>
  );
}
