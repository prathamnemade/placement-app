import { Checkbox as AntCheckbox } from 'antd';
import React from 'react';
import './index.scss';

export const Checkbox = (props) => {
  return(
    <AntCheckbox
      {...props}
    />
  );
}

export default Checkbox;
