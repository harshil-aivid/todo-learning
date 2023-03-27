import React from "react";

export default function Todo(props) {
  const { title, status, toggleStatus, handleRemove } = props;

  return (
    <div>
      <input type="checkbox" checked={status} onChange={toggleStatus} />
      {title}
      <button type="button" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
}

Todo.defaultProps = {
  title: "Missing",
};
