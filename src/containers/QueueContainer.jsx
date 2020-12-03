import React from "react";

import { useSelector } from "react-redux";

import Queue from "../components/Queue";

export default function QueueContainer() {
  const { queue } = useSelector(({ app }) => app);

  return <Queue queue={queue} />;
}
