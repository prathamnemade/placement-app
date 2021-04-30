import React from "react";
import { Row, Col } from "antd";
import constants from "./constants";
import { AssignAction, AssignedOptions, ConfirmOption } from "./Options";
import "./index.scss";
import { Text } from "@placement-app/shared/typography";
import { Information } from "@placement-app/shared/assets";

/**
 * Action bar for supervisor file handling page.
 * @param {*} props
 * @returns
 */
export const Actionbar = ({
  isAccepted,
  assignedTo,
  setIsAccepted,
  setShowModal,
  setShowContactFheModal,
}) => {
  const [title, setTitle] = React.useState("");

  React.useEffect(() => {
    if (assignedTo !== null) {
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

  const onConfirm = () => setIsAccepted(true);
  const onAssign = () => setShowModal(true);
  const onContact = () => setShowContactFheModal(true);

  return (
    <div className="supervisor-actionbar">
      <Row align="middle" justify="space-between">
        <Col className="title-container" xs={24} md={18}>
          <Information />
          <Text className="title" children={title} />
        </Col>
        <Col className="supervisor-actionbar-btns" xs={24} md={6}>
          {assignedTo !== null ? (
            <AssignedOptions onReAssign={onAssign} onContact={onContact} />
          ) : !isAccepted ? (
            <ConfirmOption onClick={onConfirm} />
          ) : (
            <AssignAction onClick={onAssign} />
          )}
        </Col>
      </Row>
    </div>
  );
};
