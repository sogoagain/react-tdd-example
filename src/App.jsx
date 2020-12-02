import React from "react";
import { useSelector } from "react-redux";
import Greetings from "./components/Greetings";

import Title from "./components/Title";

export default function App() {
  const { customer } = useSelector((state) => state);

  return (
    <>
      <Title />
      <Greetings />
      <h2>[띵동] {customer} 고객님</h2>
    </>
  );
}
