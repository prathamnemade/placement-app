import React from "react";
import PropTypes from "prop-types";
import { Tag as AntTag } from "antd";
import "./index.scss";
import { tagVarients } from "./constants";

export const Tag = (props) => {
  const _class_ =
    props.color +
    " " +
    props.shape +
    " " +
    props.type +
    " " +
    (props.className ? props.className : "");
  return <AntTag {...props} className={_class_} />;
};

Tag.propTypes = {
  closable: PropTypes.bool,
  closeIcon: PropTypes.node,
  icon: PropTypes.node,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.string,
  color: PropTypes.oneOf(tagVarients),
  type: PropTypes.oneOf(["unbordered", ""]),
  shape: PropTypes.oneOf(["rounded", ""]),
};

Tag.defaultProps = {
  className: "",
  color: "",
  shape: "",
  type: "",
};

export default Tag;
