import { Text, Title } from "@placement-app/shared/typography";
import { Col, Dropdown, Menu, Row } from "antd";
import React from "react";
import { NavigationMenuItems } from "./constants";
import "./index.scss";
import { NavigationMenu } from "./NavMenu";

/**
 * Placement page navbar.
 * @returns props
 */
export const PlacementNavbar = ({ toggleFilter }) => {
  return (
    <Row align="middle" className="placment-navbar">
      <Col xs={12} xl={7}>
        <Row align="middle">
          <Col className="filter-toggle-option">
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
              src="/assets/images/empanelmentBG.png"
              alt="logo"
            />
          </Col>
        </Row>
      </Col>
      <Col xs={0} xl={10}>
        <NavigationMenu
          menuItems={NavigationMenuItems}
          mode="horizontal"
          className="navbar-menu"
        />
      </Col>
      <Col xs={12} xl={7}>
        <Menu
          theme="dark"
          className="navbar-menu-right"
          mode="horizontal"
          selectable={false}
        >
          <Menu.Item key="mobile" className="right-menu-item mobile">
            <Dropdown
              overlay={
                <NavigationMenu
                  menuItems={NavigationMenuItems}
                  className="navbar-mobile-menu"
                />
              }
              placement="bottomRight"
            >
              <Text>&#9776;</Text>
            </Dropdown>
          </Menu.Item>
          <Menu.Item key="bell" className="right-menu-item">
            <img src="/assets/icons/bell.svg" alt="" />
          </Menu.Item>
          <Menu.Item key="avatar" className="right-menu-item">
            <img
              className="menu-avatar"
              src="/assets/images/avatar-default.jpg"
              alt=""
            />
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
};
