import React from "react";

export default function Queue({ queue }) {
  return (
    <ul>
      {queue.map(({ number, name }) => (
        <li key={number}>
          [
          {number}
          ]
          {' '}
          {name}
        </li>
      ))}
    </ul>
  );
}
