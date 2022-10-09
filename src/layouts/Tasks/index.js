import "./tasks.scss";
import { useState } from "react";
import Task from "../../components/Task";
import AddTaskModal from "../../components/AddTaskModal";
import { v4 as uuidv4 } from "uuid";

function Tasks() {
  const [tasks, SetTasks] = useState([
    { id: uuidv4(), value: "Todo 1" },
    { id: uuidv4(), value: "Todo 2" },
  ]);

  const [showModal, SetShowModal] = useState(false);

  const handleRemove = (id) => {};

  const handleCloseModal = () => {
    SetShowModal(false);
  };

  const handleAddTask = (value) => {
    SetTasks([...tasks, { id: uuidv4(), value }]);
  };

  return (
    <div className="App-tasks container ml-auto mr-auto mt-3 ps-5 pe-5">
      <h4 className="fw-4 text-white">Tasks</h4>
      <button
        type="button"
        className="btn btn-outline-primary btn-add ms-5 me-5 mb-1"
        onClick={() => {
          SetShowModal(true);
        }}
      >
        <i className="bi bi-plus-circle"></i> Add Tasks
      </button>

      <ul className="ms-5 me-5">
        {tasks.map((task) => (
          <Task task={task} handleRemove={handleRemove} />
        ))}
      </ul>

      <AddTaskModal
        show={showModal}
        handleClose={handleCloseModal}
        handleAddTask={handleAddTask}
      />
    </div>
  );
}

export default Tasks;
