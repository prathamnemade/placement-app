import { Menu } from "antd";
import React from "react";
import "./index.scss";

/**
 * Navigation menu for placment header
 * @param {*} props
 * @returns
 */
export const NavigationMenu = ({ menuItems, mode, className }) => {
  const [selectedMenu, setSelectedMenu] = React.useState("1");

  const mainMenuClicked = (idx) => {
    setSelectedMenu(idx);
  };

  return (
    <Menu
      theme="dark"
      className={className}
      mode={mode}
      defaultSelectedKeys={[selectedMenu]}
      children={menuItems.map((item, index) => {
        return (
          <Menu.Item
            key={index}
            onClick={() => mainMenuClicked(index)}
            className="menu-item"
          >
            <span className="icon">{item.icon}</span>
            <span className="resource-name text-white semibold">
              {item.title}
            </span>
          </Menu.Item>
        );
      })}
    />
  );
};
