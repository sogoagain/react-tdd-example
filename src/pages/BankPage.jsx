import React from "react";

import { useDispatch } from "react-redux";

import useInterval from "use-interval";

import { dequeue } from "../features/appSlice";

import Title from "../components/Title";
import Greetings from "../components/Greetings";

import StatusBoardContainer from "../containers/StatusBoardContainer";
import NumberTagFormContainer from "../containers/NumberTagFormContainer";
import QueueContainer from "../containers/QueueContainer";

export default function BankPage() {
  const dispatch = useDispatch();

  useInterval(() => {
    dispatch(dequeue());
  }, 3000);

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
