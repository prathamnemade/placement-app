import React from 'react'
import PropTypes from 'prop-types'
import { Tag } from 'antd'
import './index.scss'

export const SuccessTag = props => {
  const _class_ = "success " + (props.className ? props.className : "")
  return (
    <Tag
      {...props}
      className={_class_}
    />
  )
}

SuccessTag.propTypes = {
  closable: PropTypes.bool,
  closeIcon : PropTypes.node,
  icon: PropTypes.node,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.string
}

SuccessTag.defaultProps = {
  className: ""
}

export default SuccessTag
