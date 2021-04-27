import { Title } from "@placement-app/shared/typography";
import { Col, Row } from "antd";
import React from "react";
import "./index.scss";
import { NavigationMenuItems } from "./constants";
import { NavigationMenu } from "./NavMenu";
import { RightMenu } from "./RightMenu";

/**
 * Placement page navbar.
 * @returns props
 */
export const PlacementNavbar = ({ toggleFilter }) => {
  return (
    <Row align="middle" className="placment-navbar">
      <Col span={6}>
        <Row align="middle">
          <Col>
            <Title
              level={5}
              children={<>&#9776;</>}
              className="filter-toggle"
              onClick={toggleFilter}
            />
          </Col>
          <Col>
            <img
              className="placement-logo"
              src="/assets/empanelmentBG.png"
              alt="logo"
            />
          </Col>
        </Row>
      </Col>
      <Col span={12}>
        <Row justify="center">
          <NavigationMenu menuItems={NavigationMenuItems} />
        </Row>
      </Col>
      <Col span={6}>
        <Row justify="end">
          <RightMenu/>
        </Row>
      </Col>
    </Row>
  );
};
