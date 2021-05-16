import React from "react";
import classNames from "classnames";
import { Card, Button } from "react-bootstrap";
import { Delete } from "@material-ui/icons";
import PropTypes from "prop-types";

const Delegate = ({ tasks, removeDelegate }) => {
  return (
    <>
      <h2> Delegate </h2>
      {tasks.map((task, index) => (
        <Card className="mb-1" key={index}>
          <Card.Body
            className={classNames(
              "d-flex",
              "justify-content-between",
              "align-items-center"
            )}
          >
            {task.text}
            <Button
              className={classNames("btn-sm", "btn-danger")}
              onClick={() => removeDelegate(task.id)}
            >
              <Delete />
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

// Proptypes
Delegate.propTypes = {
  tasks: PropTypes.array.isRequired,
  removeDelegate: PropTypes.func.isRequired,
};

export default Delegate;
