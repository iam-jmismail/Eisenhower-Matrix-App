import React from "react";
import classNames from "classnames";
import { Card, Button } from "react-bootstrap";
import { Delete } from "@material-ui/icons";
import PropTypes from "prop-types";

const Del = ({ tasks, removeDelete }) => {
  return (
    <>
      <h2> Delete </h2>
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
              className={classNames("btn-sm", "btn-dark")}
              onClick={() => removeDelete(task.id)}
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
Del.propTypes = {
  tasks: PropTypes.array.isRequired,
  removeDelete: PropTypes.func.isRequired,
};

export default Del;
