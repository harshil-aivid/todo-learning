import React from "react";
export default function Todo(props) {
  const { title, status, toggleStatus, handleDelete } = props;

  return (
    <div>
      <input type="checkbox" checked={status} onChange={toggleStatus} />
      {title}
      <button onClick={handleDelete} color="red">
        Delete
      </button>
    </div>
  );
}

Todo.defaultProps = {
  title: "Missing",
};
