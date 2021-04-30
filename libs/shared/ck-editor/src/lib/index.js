import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

export const CkEditor = props => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={props.data}
      config={props.config}
      onChange={props.onChange}
      onInit={props.onReady}
    />
  )
}

CkEditor.propTypes = {
  config: PropTypes.object,
  data: PropTypes.any,
  onChange: PropTypes.func,
  onInit: PropTypes.func,
}

CkEditor.defaultProps = {}

export default CkEditor
