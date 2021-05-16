import React, { useState, useEffect } from "react";
import * as uuid from "uuid";
import { Container, Row, Col, Button } from "react-bootstrap";

// Actions
import { addTask } from "../../actions/tasks";

// Components
import Do from "../Tasks/Do";
import Decide from "../Tasks/Decide";
import Delete from "../Tasks/Delete";
import Delegate from "../Tasks/Delegate";
import Modal from "../IO/Modal";

// UI
import "./Matrix.scss";

function Matrix() {
  const [modal, setModal] = useState(false);
  const [todoType, setTodoType] = useState({});
  const [response, setResponse] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  let [tasks, setTasks] = useState([]);

  // Functions
  const removeDos = (index) => {
    const mutateditems = tasks.filter((o) => o.id !== index);
    localStorage.setItem("tasks", JSON.stringify(mutateditems));
    setTasks(mutateditems);
  };

  const removeDecide = (index) => {
    const mutateditems = tasks.filter((o) => o.id !== index);
    localStorage.setItem("tasks", JSON.stringify(mutateditems));
    setTasks(mutateditems);
  };

  const removeDelegate = (index) => {
    const mutateditems = tasks.filter((o) => o.id !== index);
    localStorage.setItem("tasks", JSON.stringify(mutateditems));
    setTasks(mutateditems);
  };

  const removeDelete = (index) => {
    const mutateditems = tasks.filter((o) => o.id !== index);
    localStorage.setItem("tasks", JSON.stringify(mutateditems));
    setTasks(mutateditems);
  };

  const toggleModal = () => {
    setModal(!modal);
  };
  const saveTask = () => {
    const newTask = {
      id: uuid.v4(),
      type: todoType.value,
      text: response,
    };

    addTask(newTask);
    setTasks([...tasks, newTask]);
    toggleModal();
  };

  return (
    <>
      <div className="jumbotron bg-light">
        <Container>
          <Modal
            modal={modal}
            toggleModal={toggleModal}
            setResponse={setResponse}
            saveTask={saveTask}
            setTodoType={setTodoType}
            response={response}
            todoType={todoType}
          />
          <h2> Eisenhower Matrix</h2>
          <Button onClick={() => toggleModal()}> Add Task</Button>
        </Container>
      </div>
      <Container className="my-4">
        <div className="tasks">
          <Row>
            <Col md={6} className="doTasks">
              <Do
                tasks={tasks.filter((task) => task.type === "do")}
                removeDos={removeDos}
              />
            </Col>
            <Col md={6} className="decideTasks">
              <Decide
                tasks={tasks.filter((task) => task.type === "decide")}
                removeDecide={removeDecide}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6} className="doDelegate">
              <Delegate
                tasks={tasks.filter((task) => task.type === "delegate")}
                removeDelegate={removeDelegate}
              />
            </Col>
            <Col md={6} className="doDelete">
              <Delete
                tasks={tasks.filter((task) => task.type === "delete")}
                removeDelete={removeDelete}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Matrix;
