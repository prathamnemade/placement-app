import { Row } from 'antd';
import React from 'react';
import './index.scss';
import { TitlesCol } from './TtitlesCol';

/**
 * Headings for files list in placement page.
 * @param {*} props 
 * @returns 
 */
export const FileListTitles = (props) => {

  const sortMethod = (e) => {
    alert('i will filter something...')
  }

  return (
    <Row align="middle" className="titles-container">
      <TitlesCol span={6} title={"Name & Type"} onSort={sortMethod} />
      <TitlesCol span={4} title={"SM & Customer"} onSort={sortMethod} />
      <TitlesCol span={5} title={"Travel Schedule"} onSort={sortMethod} />
      <TitlesCol span={4} title={"Criticality"} onSort={sortMethod} />
      <TitlesCol span={5} title={"Status"} onSort={sortMethod} />
    </Row>
  )
}