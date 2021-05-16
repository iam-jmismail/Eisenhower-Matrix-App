import React from "react";
import classNames from "classnames";
import { Card, Button } from "react-bootstrap";
import { Delete } from "@material-ui/icons";
import PropTypes from "prop-types";

const Decide = ({ tasks, removeDecide }) => {
  return (
    <>
      <h2> Decide </h2>
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
              className={classNames("btn-sm", "btn-primary")}
              onClick={() => removeDecide(task.id)}
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
Decide.propTypes = {
  tasks: PropTypes.array.isRequired,
  removeDecide: PropTypes.func.isRequired,
};

export default Decide;
