import { Progress as AntProgress } from 'antd';
import React from 'react';
import './progress.module.scss';

/**
 * Ant design Progress Wrapper Component
 * @param {*} props
 * @returns 
 */
export const Progress = ({
  percent,
  showInfo,
  strokeColor,
  trailColor,
  ...props
}) => {
  return (
    <AntProgress
      percent={percent}
      showInfo={showInfo}
      strokeColor={strokeColor}
      trailColor={trailColor}
      {...props}
    />
  );
}

export default Progress;
