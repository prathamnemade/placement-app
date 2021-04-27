import { Menu } from "antd";
import React from "react";
import "./index.scss";

/**
 * Navigation menu for placment header
 * @param {*} props 
 * @returns 
 */
export const NavigationMenu = ({ menuItems }) => {
  const [selectedMenu, setSelectedMenu] = React.useState("1");

  const mainMenuClicked = (idx) => {
    setSelectedMenu(idx);
  };

  return (
    <Menu
      theme="dark"
      className="navbar-menu"
      mode="horizontal"
      defaultSelectedKeys={[selectedMenu]}
      children={menuItems.map((item, index) => {
        return (
          <Menu.Item key={index} onClick={() => mainMenuClicked(index)}>
            <img className="resource-icon mr-6" src={item.icon} alt="" />
            <span className="resource-name text-white semibold">
              {item.title}
            </span>
          </Menu.Item>
        );
      })}
    />
  );
};
