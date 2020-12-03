import React from "react";

import Title from "./components/Title";
import Greetings from "./components/Greetings";

import StatusBoardContainer from "./containers/StatusBoardContainer";
import NumberTagFormContainer from "./containers/NumberTagFormContainer";
import QueueContainer from "./containers/QueueContainer";

export default function App() {
  return (
    <>
      <Title />
      <Greetings />
      <StatusBoardContainer />
      <NumberTagFormContainer />
      <QueueContainer />
    </>
  );
}
