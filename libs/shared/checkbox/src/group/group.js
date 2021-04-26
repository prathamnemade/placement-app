import React from 'react';
import './group.module.scss';
import { Checkbox} from 'antd';

export const CheckboxGroup = (props) => {
  return(
    <Checkbox.Group
      {...props}
    />
  );
}

export default CheckboxGroup;
