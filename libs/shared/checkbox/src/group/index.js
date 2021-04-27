import { Checkbox } from 'antd';
import React from 'react';
import './index.scss';

export const CheckboxGroup = (props) => {
  return(
    <Checkbox.Group
      {...props}
    />
  );
}

export default CheckboxGroup;
