import React from 'react';
import './text.scss';
import { Typography } from 'antd';

export const Text = ({
  children,
  ...props
}) => {
  return (
    <Typography.Text
      children={children}
      {...props}
    />
  );
}

export default Text;
