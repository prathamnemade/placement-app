import { Button } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import './index.scss'

/**
 * 
 * @param {*} props 
 * @returns 
 */
export const RoundButton = (props) => {
  return (
    <Button
      shape="round"
      {...props}
    />
  )
}

// props types
RoundButton.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  ghost: PropTypes.bool,
  href: PropTypes.string,
  icon:  PropTypes.node,
  target: PropTypes.string,
  onClick : PropTypes.func,
  size: PropTypes.oneOf(["small", "middle", "large"]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  loading: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.objectOf({
      delay: PropTypes.number
    })
  ])
}

// default props value
RoundButton.defaultProps = {
  disabled: false,
  ghost: false,
  loading: false
}

export default RoundButton
