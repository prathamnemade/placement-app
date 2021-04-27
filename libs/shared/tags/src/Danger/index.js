import React from 'react'
import PropTypes from 'prop-types'
import { Tag } from 'antd'
import './index.scss'

export const DangerTag = props => {
  const _class_ = "danger " + (props.className ? props.className : "")
  return (
    <Tag
      {...props}
      className={_class_}
    />
  )
}

DangerTag.propTypes = {
  closable: PropTypes.bool,
  closeIcon : PropTypes.node,
  icon: PropTypes.node,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.string
}

DangerTag.defaultProps = {
  className: ""
}

export default DangerTag
