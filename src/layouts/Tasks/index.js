import "./tasks.scss";
import { useState } from "react";
import Task from "../../components/Task";
import AddTaskModal from "../../components/AddTaskModal";
import { v4 as uuidv4 } from "uuid";

function Tasks() {
  const tasklist = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, SetTasks] = useState(tasklist);

  const [showModal, SetShowModal] = useState(false);

  const handleRemove = (id) => {
    const taskList = tasks.filter((task) => task.id !== id);
    SetTasks([...taskList]);
    localStorage.setItem("tasks", JSON.stringify(taskList));
  };

  const handleCloseModal = () => {
    SetShowModal(false);
  };

  const handleAddTask = (value) => {
    const newTasks = { id: uuidv4().toString(), value };
    const newTaskList = [...tasks, newTasks];
    SetTasks(newTaskList);
    localStorage.setItem("tasks", JSON.stringify(newTaskList));
  };

  return (
    <div className="App-tasks container ml-auto mr-auto mt-3 ps-5 pe-5 pb-3">
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
          <Task key={task.id} task={task} handleRemove={handleRemove} />
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
