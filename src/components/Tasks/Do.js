import React from "react";
import classNames from "classnames";
import { Card, Button } from "react-bootstrap";
import { Delete } from "@material-ui/icons";
import PropTypes from "prop-types";

const Do = ({ tasks, removeDos }) => {
  return (
    <>
      <h2> Do </h2>
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
              className={classNames("btn-sm", "btn-success")}
              onClick={() => removeDos(task.id)}
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
Do.propTypes = {
  tasks: PropTypes.array.isRequired,
  removeDos: PropTypes.func.isRequired,
};

export default Do;
