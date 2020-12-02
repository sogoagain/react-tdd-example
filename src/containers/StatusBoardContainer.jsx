import React from "react";

import { useSelector } from "react-redux";

import StatusBoard from "../components/StatusBoard";

export default function StatusBoardContainer() {
  const { customer, waitTime } = useSelector((state) => state);

  return <StatusBoard customer={customer} waitTime={waitTime} />;
}
