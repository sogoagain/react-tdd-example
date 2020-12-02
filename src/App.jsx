import React from "react";

import Title from "./components/Title";
import Greetings from "./components/Greetings";

import StatusBoardContainer from "./containers/StatusBoardContainer";

export default function App() {
  return (
    <>
      <Title />
      <Greetings />
      <StatusBoardContainer />
    </>
  );
}
