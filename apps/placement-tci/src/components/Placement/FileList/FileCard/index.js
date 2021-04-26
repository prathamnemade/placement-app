import { Progress } from '@placement-tci/shared/progress';
import { Tag } from '@placement-tci/shared/tags';
import { Title, Text } from '@placement-tci/shared/typography';
import { Avatar, Card, Col, Row, Tooltip } from 'antd';
import React from 'react';
import { Button } from '@placement-tci/shared/button';
import './index.scss';

export const FileCard = ({ file }) => {
  // these are dummy variables to pass throgh props
  // letter will be configured as class in the dumb component(or change according to need)
  const tagColor = ["error", "success", "warning"];
  const strokeColor = ["#f5222d", "orange", "#52c41a", "purple"] 

  return <Card className="file-card">
    <div className="updated">
      <Button 
        color="warning"
        shape="round"
      >
        <span>&#9733;</span>
        Updated
      </Button>
    </div>
    <Row align="middle">
      <Col span={6}>
        <Row align="middle">
          <Col>
            <Avatar shape="square" size={64} children={'Kes'} />
          </Col>
          <Col style={{ paddingLeft: 10 }}>
            <Title
              level={5}
              children="Golden Temple"
              className="file_name heading"
            />
            <Text
              children="GIT"
              className="sub-heading"
            />
          </Col>
        </Row>
      </Col>
      <Col span={4}>
        <Row align="middle">
          <Col>
            <Title
              level={5}
              children="Kuoni"
              className="heading"
            />
            <Text
              children="United Kingdom"
              className="sub-heading"
            />
          </Col>
        </Row>
      </Col>
      <Col span={5}>
        <Row align="middle">
          <Col>
            <Title
              level={5}
              children="03 Apr ’21 -> 06 Apr ‘21"
              className="heading"
            />
            <Text
              children="Multi-city"
              className="sub-heading"
            />
          </Col>
        </Row>
      </Col>
      <Col span={4}>
        <Row align="middle">
          <Col>
            <Tag
              color={tagColor[Math.floor(Math.random() * tagColor.length)]}
              children="XO Approching"
            />
          </Col>
        </Row>
      </Col>
      <Col span={5}>
        <Row align="middle">
          <Col span={20}>
            <Text
              children={"Yash Aggarwal"}
              className="assigned-name"
            />
            <Tooltip placement="bottom" title="2/18 bookings made">
              <Progress
                className="file-progress"
                percent={Math.floor(Math.random(0, 100) * 100)}
                showInfo={false}
                strokeColor={
                  strokeColor[Math.floor(Math.random() * 3)]
                }
              />
            </Tooltip>
          </Col>
          <Col span={4} style={{ textAlign: 'center' }}>
            <Text style={{ fontSize: 20 }} children={<>&#x0003E;</>} />
          </Col>
        </Row>
      </Col>
    </Row>
  </Card>
}
