import React from "react";

const ListItem = ({ task, setCompleted, deleteTask }) => (
  <li className="input-group mb-3" id={task.id} data-testid="listItem">
    <div className="custom-control custom-checkbox">
      <input
        type="checkbox"
        id={`customCheck_${task.id}`}
        className="custom-control-input"
        checked={task.completed}
        onChange={() => setCompleted(task.id)}
        data-testid="checkbox"
      />
      <label
        className="custom-control-label"
        htmlFor={`customCheck_${task.id}`}
      >
        &nbsp;
      </label>
    </div>
    <input
      type="text"
      className={`form-control ${task.completed ? "completed" : ""}`}
      value={task.item}
      data-testid="taskInput"
      readOnly
    />
    <div className="input-group-append">
      <button
        data-testid="deleteBtn"
        className="btn btn-danger input-group-text"
        onClick={() => deleteTask(task.id)}
      >
        X
      </button>
    </div>
  </li>
);

export default React.memo(ListItem);
