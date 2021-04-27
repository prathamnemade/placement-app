import { Button as AntButton } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import './index.scss';

/**
 * 
 * @param {*} props 
 * @returns 
 */
export const Button = props => {
  return (
    <AntButton
      {...props}
    />
  )
}

Button.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  disabled: PropTypes.bool,
  ghost: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.node,
  loading: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.objectOf({
      delay: PropTypes.number
    })
  ]),
  size: PropTypes.oneOf(["small", "middle", "large"]),
  target: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  disabled: false,
  ghost: false,
  loading: false
}

export default Button;