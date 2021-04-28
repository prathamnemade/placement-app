import React from "react";
import { Row, Col } from "antd";
import constants from "./constants";
import { AssignAction, AssignedOptions, ConfirmOption } from "./Options";
import "./index.scss";

/**
 * Action bar for supervisor file handling page.
 * @param {*} props
 * @returns
 */
export const Actionbar = ({ isAccepted = true, assignedTo = "" }) => {
  const [title, setTitle] = React.useState("");

  React.useEffect(() => {
    if (assignedTo !== "") {
      setTitle(
        constants.descriptions.accpedLeft +
          assignedTo +
          constants.descriptions.accpedRight
      );
    } else if (!isAccepted) {
      setTitle(constants.descriptions.notAccpeted);
    } else {
      setTitle(constants.descriptions.notAssigned);
    }
  }, [assignedTo, isAccepted]);

  return (
    <div className="supervisor-actionbar">
      <Row align="middle" justify="space-between">
        <Col>
          <div className="title">{title}</div>
        </Col>
        <Col className="supervisor-actionbar-btns">
          {assignedTo !== "" ? (
            <AssignedOptions />
          ) : !isAccepted ? (
            <ConfirmOption />
          ) : (
            <AssignAction />
          )}
        </Col>
      </Row>
    </div>
  );
};
