import { Button, Card, Col, Row } from "antd";
import { Title } from "@placement-app/shared/typography";
import React from "react";
import "./index.scss";
import { Tag } from "@placement-app/shared/tags";
import { LocationFIlled } from "@placement-app/shared/assets";

export const AssignFheCard = ({ details, onClick, isSelected }) => {
  const selectFHE = () => onClick(details.id);
  return (
    <Card
      className={
        "assign-fhe-card " + (isSelected ? " assign-fhe-card-selected" : "")
      }
      onClick={selectFHE}
    >
      <Row align="middle" justify="space-between">
        <Col className="fhe-card-meta">
          <Title
            level={5}
            children={details.name}
            className="assign-fhe-name"
          />
          <Tag
            icon={<LocationFIlled background={"none"} color={"#333"} />}
            children={details.city}
            color="ghost"
          />
        </Col>
        <Col>
          <Button
            children={isSelected ? "Selected" : "Select"}
            className={"btn " + (isSelected ? " selected" : "")}
          />
        </Col>
      </Row>
    </Card>
  );
};
