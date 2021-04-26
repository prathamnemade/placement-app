import React from 'react';
import './button.module.scss';

const ButtonTypes = {
  dashed: 'dashed',
  link: 'link',
  text: 'text',
  default: 'default'
}

const ButtonColors = {
  default: '',
  primary: 'primary',
  warning: 'warning',
  info: 'info',
  danger: 'danger',
  success: 'success',
}

const ButtonShape = {
  round: 'round',
  default: ''
}

export function Button({
  color = 'default',
  type = 'default',
  shape = 'default',
  children,
  disabled = false,
  className="",
  ...props
}) {
  const classes = `button ${ButtonTypes[type]} ${ButtonColors[color]} ${ButtonShape[shape]} ${className}`
  return (
    <button
      className={classes}
      children={children}
      disabled={disabled}
      {...props}
    />
  );
}

export default Button;
