import { Card, Col, Row } from "antd";
import React from "react";
import {
  ImageBuilder,
  TitleBuilder,
  TagsBuilder,
  ExtraBuilder,
} from "./Builders";
import "./index.scss";

/**
 *
 * @returns
 */
export const RequirementCard = ({
  className = "",
  style,
  title,
  image,
  tags,
  extra,
  right,
  leftSpan = 18,
}) => {
  const span = !right ? 24 : leftSpan;
  return (
    <Card className={"requirement-card" + className} style={style}>
      <Row align="middle">
        <Col span={span}>
          <Row>
            <Col className="avatar">
              <ImageBuilder src={image} />
            </Col>
            <Row className="card-details">
              <Col className="title">
                <TitleBuilder title={title} />
              </Col>
              <Col className="tags">
                <TagsBuilder tags={tags} />
              </Col>
              <Col className="extra">
                <ExtraBuilder extra={extra} />
              </Col>
            </Row>
          </Row>
        </Col>
        {right && <Col span={24 - span}>{right()}</Col>}
      </Row>
    </Card>
  );
};
