import React from "react";

export default function NumberTagForm({ value, onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="input-name">이름</label>
      <input
        type="text"
        name="name"
        id="input-name"
        value={value}
        onChange={onChange}
      />
      <button type="submit">뽑기</button>
    </form>
  );
}
