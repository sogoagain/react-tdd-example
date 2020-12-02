import React from "react";

import { useSelector } from "react-redux";

export default function QueueContainer() {
  const { queue } = useSelector(({ app }) => app);

  return (
    <ul>
      {queue.map(({ number, name }) => (
        <li key={number}>
          [{number}] {name}
        </li>
      ))}
    </ul>
  );
}
