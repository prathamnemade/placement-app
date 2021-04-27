import React from 'react'
import PropTypes from 'prop-types'
import { Tag } from 'antd'
import './index.scss'

export const PurpleTag = props => {
  const _class_ = "purple " + (props.className ? props.className : "")
  return (
    <Tag
      {...props}
      className={_class_}
    />
  )
}

PurpleTag.propTypes = {
  closable: PropTypes.bool,
  closeIcon : PropTypes.node,
  icon: PropTypes.node,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.string
}

PurpleTag.defaultProps = {
  className: ""
}

export default PurpleTag
