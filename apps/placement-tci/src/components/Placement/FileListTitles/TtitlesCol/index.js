import { Text } from '@placement-tci/shared/typography';
import { Col } from 'antd';
import React from 'react';
import './index.scss';

/**
 * Column for titles
 * @param {*} props 
 * @returns 
 */
export const TitlesCol = ({ span, title, onSort }) => {
  return (
    <Col span={span}>
      <Text
        children={title}
        className="title"
      />
      <Text
        children={<>&#x021F5;</>}
        className="title-icon"
        onClick={onSort}
      />
    </Col>
  )
}
