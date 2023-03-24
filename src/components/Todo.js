import React from "react";

export default function Todo(props) {
  const { title, status, toggleStatus } = props;

  return (
    <div>
      <input type="checkbox" checked={status} onChange={toggleStatus} />
      {title}
    </div>
  );
}

Todo.defaultProps = {
  title: "Missing",
};
