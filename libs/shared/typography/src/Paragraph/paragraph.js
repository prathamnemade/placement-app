import React from 'react';
import './paragraph.scss';
import { Typography } from 'antd';

export const Paragraph = ({
  children,
  ...props
}) => {
  return (
    <Typography.Paragraph
      children={children}
      {...props}
    />
  );
}

export default Paragraph;
