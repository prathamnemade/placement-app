import { Menu } from "antd";
import React from "react";
import "./index.scss";

export const RightMenu = (props) => {
  return (
    <Menu theme="dark" className="navbar-menu" mode="horizontal">
      <Menu.Item key="mail5" className="right-menu-item">
        <img src="/assets/img/bell.svg" alt="" />
      </Menu.Item>
      <Menu.Item key="ap5p" className="right-menu-item">
        <img
          className="menu-avatar"
          src="/assets/img/avatar-default.jpg"
          alt="Drp"
        />
      </Menu.Item>
    </Menu>
  );
};
