import { Text } from "@placement-app/shared/typography";
import { Col, Row } from "antd";
import React from "react";
import './index.scss';

/**
 * @param {*} props
 * @returns React.Node
 */
export const RequirementHeading = ({ icon, text }) => {
  return (
    <Row className="requirement-heading">
      <Col className="requirement-heading-icon">{icon}</Col>
      <Col className="requirement-heading-text">
        <Text>{text}</Text>
      </Col>
    </Row>
  );
};
