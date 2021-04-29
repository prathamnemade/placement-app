import {
  EllipsesFill,
  LongArrowLeft,
  MessageFill,
} from "@placement-app/shared/assets";
import { Button } from "@placement-app/shared/buttons";
import { Text, Title } from "@placement-app/shared/typography";
import { Badge, Col, Dropdown, Menu, Row } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { NavigationMenuItems } from "./constants";
import "./index.scss";
import { NavigationMenu } from "./NavMenu";

/**
 * Placement Supervisor && FHE booking center page common navbar.
 * @returns props
 */
export const TripAndBookingNavbar = ({
  toggleDayItineraryModal,
  daysItineraryHidden,
}) => {
  const history = useHistory();
  const handleBack = () => history.go(-1);

  return (
    <Row align="middle" className="booking-navbar">
      <Col xs={12} xl={7}>
        <Row align="middle">
          <Col className="booking-back">
            <Title
              level={5}
              children={<LongArrowLeft />}
              className="back-option"
              onClick={handleBack}
            />
          </Col>
          <Col className="booking-logo">
            <img src="/assets/images/empanelmentBG.png" alt="logo" />
          </Col>
          <Col className="booking-info">
            <Title level={5}>Golden Triangle</Title>
            <Text>Kuoni Travels • GIT</Text>
          </Col>
        </Row>
      </Col>
      <Col xs={0} xl={10}>
        <NavigationMenu
          menuItems={NavigationMenuItems}
          mode="horizontal"
          className="booking-menu"
        />
      </Col>
      <Col xs={12} xl={7} className="booking-navbar-right">
        <Menu
          theme="dark"
          className="booking-menu-right"
          mode="horizontal"
          selectable={false}
        >
          <Menu.Item key="mobile" className="right-menu-item mobile">
            <Dropdown
              overlay={
                <NavigationMenu
                  menuItems={NavigationMenuItems}
                  className="booking-mobile-menu"
                />
              }
              placement="bottomRight"
            >
              <Text>&#9776;</Text>
            </Dropdown>
          </Menu.Item>
          <Menu.Item key="message" className="right-menu-item">
            <Badge count={10}>
              <Button
                className="message-btn"
                icon={<MessageFill />}
                children={"Messages"}
              />
            </Badge>
          </Menu.Item>
          <Menu.Item key="bell" className="right-menu-item">
            <Text
              onClick={toggleDayItineraryModal}
              children={<EllipsesFill />}
            />
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
};
