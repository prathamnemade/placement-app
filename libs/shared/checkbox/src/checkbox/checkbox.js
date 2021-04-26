import React from 'react';
import './checkbox.module.scss';
import { Checkbox as AntCheckbox} from 'antd';

export const Checkbox = (props) => {
  return(
    <AntCheckbox
      {...props}
    />
  );
}
  ;
export default Checkbox;
