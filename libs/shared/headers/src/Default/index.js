import { Layout } from "antd";
import PropTypes from "prop-types";
import React from "react";
import './index.scss';

/**
 * Default - Header component wrapper for ant
 * @param {*} props 
 * @returns 
 */
export const Header = (props) => {
  const type ={"default": "", "dark" : "dark"}
  const _class_ = `${type[props.type]} ${props.className}`

  return <Layout.Header
    {...props} 
    className={_class_}
  />;

};

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.elementType,
  ]),
  type: PropTypes.oneOf([
    "dark", "default"
  ]),
  style: PropTypes.object,
  className: PropTypes.string
};

Header.defaultProps = {
  type: "default",
  style: {},
  className: ""
}

export default Header;
