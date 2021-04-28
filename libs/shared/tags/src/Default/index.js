import React from "react";
import PropTypes from "prop-types";
import { Tag as AntTag } from "antd";
import "./index.scss";

export const Tag = (props) => {
  const _class_ = props.color + (props.className ? props.className : "");
  return <AntTag {...props} className={_class_} />;
};

Tag.propTypes = {
  closable: PropTypes.bool,
  closeIcon: PropTypes.node,
  icon: PropTypes.node,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.string,
  color: PropTypes.oneOf(["danger", "purple", "success", "warning", "default"]),
};

Tag.defaultProps = {
  className: "",
  color: "default",
};

export default Tag;
