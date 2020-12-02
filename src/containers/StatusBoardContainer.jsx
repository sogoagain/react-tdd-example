import React from "react";

import { useSelector } from "react-redux";

export default function StatusBoardContainer() {
  const { customer } = useSelector((state) => state);

  return <h2>[띵동] {customer} 고객님</h2>;
}
