import { Progress as AntProgress } from 'antd';
import React from 'react';
import PropTypes from 'prop-types'
import './index.scss'

/**
 * 
 * @param {*} props 
 * @returns 
 */
 export const Progress = ({
  percent,
  showInfo,
  strokeColor,
  trailColor,
  color,
  className
}) => {
  const c = `${color} ${className}`
  return (
    <AntProgress
      percent={percent}
      showInfo={showInfo}
      strokeColor={strokeColor}
      trailColor={trailColor}
      type="line"
      className={c}
    />
  );
}


Progress.propTypes = {
  percent: PropTypes.number,
  showInfo: PropTypes.bool,
  strokeColor: PropTypes.string,
  trailColor: PropTypes.string,
  color: PropTypes.oneOf(["success", "warning", "danger", "default"])
}


Progress.defaultProps = {
  showInfo: false
}

export default Progress
