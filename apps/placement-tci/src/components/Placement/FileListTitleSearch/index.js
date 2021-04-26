import { Title, Text } from '@placement-tci/shared/typography';
import { Col, Row, Input } from 'antd';
import React from 'react';
import './index.scss';

export const FileListTitleSearch = () => {
  return (
    <Row className="file-title-container">
      <Col>
        <Row align="middle" gutter={20}>
          <Col>
            <Title
              level={4}
              children="Showing 129 Files"
            />
          </Col>
          <Col>
            <Input
              type="text"
              size="middle"
              placeholder="Search for a file"
              className="file-search-input"
              prefix={
                <Text 
                  style={{ fontSize: 18, display: "inline-block", paddingRight: "3px" }}
                  children={<>&#128269;</>}
                />
              }
            />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}