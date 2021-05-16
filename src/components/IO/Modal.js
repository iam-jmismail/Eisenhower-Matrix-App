import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import { Modal, Button, Form } from "react-bootstrap";

function ModalComponent({
  toggleModal,
  modal,
  setResponse,
  saveTask,
  setTodoType,
  response,
  todoType,
}) {
  const handleChange = (value) => {
    setResponse(value);
  };

  const options = [
    { value: "do", label: "Do" },
    { value: "decide", label: "Decide" },
    { value: "delegate", label: "Delegate" },
    { value: "delete", label: "Delete" },
  ];

  return (
    <Modal show={modal} onHide={() => toggleModal()} size="lg" centered>
      <Modal.Header closeButton> Create Task </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Control
            type="text"
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Type your task name"
          />
        </Form.Group>

        <Select options={options} onChange={(value) => setTodoType(value)} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={() => toggleModal()}>
          Close
        </Button>
        <Button onClick={() => saveTask()} disabled={!todoType || !response}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

// PropTypes
ModalComponent.propTypes = {
  modal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  setTodoType: PropTypes.func.isRequired,
  setResponse: PropTypes.func.isRequired,
  saveTask: PropTypes.func.isRequired,
  response: PropTypes.string,
  todoType: PropTypes.object,
};

export default ModalComponent;
