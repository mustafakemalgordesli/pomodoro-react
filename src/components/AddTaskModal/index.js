import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function AddTaskModal({ show, handleClose, handleAddTask }) {
  const [value, SetValue] = useState("");

  const handleAddButton = () => {
    if (value === "") alert("Task can't be empty");
    else {
      handleAddTask(value);
      SetValue("");
      handleClose();
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            placeholder="Task"
            className="form-control"
            type="text"
            value={value}
            onChange={(e) => {
              SetValue(e.target.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddButton}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddTaskModal;
