import React from 'react';
import './title.module.scss';
import { Typography } from 'antd';

export const Title = ({
  children,
  level,
  className="",
  ...props
}) => {
  return (
    <Typography.Title
      children={children}
      level={level}
      className={`_title ${className}`}
      {...props}
    />
  );
}

export default Title;
