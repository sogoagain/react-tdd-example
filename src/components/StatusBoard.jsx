import React from "react";

export default function StatusBoard({ customer, waitTime }) {
  return (
    <>
      <h2>[띵동] {customer} 고객님</h2>
      <h3>예상 대기 시간: {waitTime}초</h3>
    </>
  );
}
