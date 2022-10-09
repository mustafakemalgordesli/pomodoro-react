import "./task.scss";

function Task({ task, handleRemove }) {
  return (
    <li className="Task mt-1 border border-secondary p-1 rounded">
      <div className="fs-5 text-white Task-value"> {task.value} </div>
      <button
        type="button"
        className="btn btn-outline-danger ms-auto me-2"
        onClick={() => handleRemove(task.id)}
      >
        <i className="bi bi-trash"></i>
      </button>
    </li>
  );
}

export default Task;
