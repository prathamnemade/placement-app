import React from 'react'
import PropTypes from 'prop-types'
import { Tag } from 'antd'
import './index.scss'

export const WarningTag = props => {
  const _class_ = "warning " + (props.className ? props.className : "")
  return (
    <Tag
      {...props}
      className={_class_}
    />
  )
}

WarningTag.propTypes = {
  closable: PropTypes.bool,
  closeIcon : PropTypes.node,
  color: PropTypes.string,
  icon: PropTypes.node,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.string
}

WarningTag.defaultProps = {
  className: ""
}

export default WarningTag
