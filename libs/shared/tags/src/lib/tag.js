import React from 'react';
import './tag.module.scss';
import { Tag as AntTag } from 'antd';

export const Tag = (props) => {
  return (
    <AntTag {...props}/>
  );
}
  ;
export default Tag;
