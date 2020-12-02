import React from "react";

import { useSelector } from "react-redux";

import Title from "./components/Title";
import Greetings from "./components/Greetings";

import StatusBoardContainer from "./containers/StatusBoardContainer";
import NumberTagFormContainer from "./containers/NumberTagFormContainer";

export default function App() {
  const { queue } = useSelector(({ app }) => app);

  return (
    <>
      <Title />
      <Greetings />
      <StatusBoardContainer />
      <NumberTagFormContainer />
      <ul>
        {queue.map(({ number, name }) => (
          <li key={number}>
            [{number}] {name}
          </li>
        ))}
      </ul>
    </>
  );
}
