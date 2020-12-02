import React from "react";

import { useSelector } from "react-redux";

export default function StatusBoardContainer() {
  const { customer, waitTime } = useSelector((state) => state);

  return (
    <>
      <h2>[띵동] {customer} 고객님</h2>
      <h3>예상 대기 시간: {waitTime}초</h3>
    </>
  );
}
