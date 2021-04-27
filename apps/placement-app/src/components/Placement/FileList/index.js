import { RoundButton } from "@placement-app/shared/buttons";
import { Progress } from "@placement-app/shared/progress";
import {
  DangerTag,
  PurpleTag,
  SuccessTag,
  WarningTag,
} from "@placement-app/shared/tags";
import { Text, Title } from "@placement-app/shared/typography";
import { Avatar, Col, Row, Table, Tooltip } from "antd";
import React from "react";

import "./index.scss";
import { FileListTitles } from "./Titles";

/**
 *
 * @returns React.Node
 */
export const FileList = () => {
  const Tag = [SuccessTag, DangerTag, WarningTag, PurpleTag][
    Math.floor(Math.random() * 4)
  ];
  const progressColors = ["success", "warning", "danger"];

  const sortMethod = () => alert("sorting...");

  const tableColumns = [
    {
      title: <FileListTitles title="Name & Types" onSort={sortMethod} />,
      dataIndex: "name_type",
      key: "name_type",
      render: (data) => (
        <Row align="middle">
          <Col>
            <Avatar shape="square" size={64} children={"Kes"} />
          </Col>
          <Col style={{ paddingLeft: 10 }}>
            <Title
              level={5}
              children="Golden Temple"
              className="file_name heading"
            />
            <Text children="GIT" className="sub-heading" />
          </Col>
        </Row>
      ),
    },
    {
      title: <FileListTitles title="SM & Customer" onSort={sortMethod} />,
      dataIndex: "sm_customer",
      key: "sm_customer",
      render: (data) => (
        <Row align="middle">
          <Col>
            <Title level={5} children="Kuoni" className="heading" />
            <Text children="United Kingdom" className="sub-heading" />
          </Col>
        </Row>
      ),
    },
    {
      title: <FileListTitles title="Travel Schedule" onSort={sortMethod} />,
      dataIndex: "travel_schedule",
      key: "travel_schedule",
      render: (data) => (
        <Row align="middle">
          <Col>
            <Title
              level={5}
              children="03 Apr ’21 -> 06 Apr ‘21"
              className="heading"
            />
            <Text children="Multi-city" className="sub-heading" />
          </Col>
        </Row>
      ),
    },
    {
      title: <FileListTitles title="Criticality" onSort={sortMethod} />,
      key: "criticality",
      dataIndex: "criticality",
      render: (criticality) => (
        <Row align="middle">
          <Col>
            <Tag children={"Tag"} />
          </Col>
        </Row>
      ),
    },
    {
      title: <FileListTitles title="Status" onSort={sortMethod} />,
      dataIndex: "status",
      key: "status",
      render: (text, record) => (
        <>
          <div className="updated">
            <RoundButton>
              <span>&#9733;</span>
              Updated
            </RoundButton>
          </div>
          <Row align="middle">
            <Col span={20}>
              <Text children={"Yash Aggarwal"} className="assigned-name" />
              <Tooltip placement="bottom" title="2/18 bookings made">
                <Progress
                  className="file-progress"
                  percent={Math.floor(Math.random(0, 100) * 100)}
                  color={progressColors[Math.floor(Math.random() * 3)]}
                />
              </Tooltip>
            </Col>
            <Col span={4} style={{ textAlign: "center" }}>
              <Text style={{ fontSize: 20 }} children={<>&#x0003E;</>} />
            </Col>
          </Row>
        </>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name_type: "John Brown",
      sm_customer: 32,
      travel_schedule: "New York No. 1 Lake Park",
      criticality: "danger",
      status: "",
    },
    {
      key: "2",
      name_type: "John Brown",
      sm_customer: 32,
      travel_schedule: "New York No. 1 Lake Park",
      criticality: "danger",
      status: "",
    },
    {
      key: "3",
      name_type: "John Brown",
      sm_customer: 32,
      travel_schedule: "New York No. 1 Lake Park",
      criticality: "danger",
      status: "",
    },
    {
      key: "4",
      name_type: "John Brown",
      sm_customer: 32,
      travel_schedule: "New York No. 1 Lake Park",
      criticality: "danger",
      status: "",
    },
    {
      key: "5",
      name_type: "John Brown",
      sm_customer: 32,
      travel_schedule: "New York No. 1 Lake Park",
      criticality: "danger",
      status: "",
    },
    {
      key: "6",
      name_type: "John Brown",
      sm_customer: 32,
      travel_schedule: "New York No. 1 Lake Park",
      criticality: "danger",
      status: "",
    },
    {
      key: "7",
      name_type: "John Brown",
      sm_customer: 32,
      travel_schedule: "New York No. 1 Lake Park",
      criticality: "danger",
      status: "",
    },
    {
      key: "8",
      name_type: "John Brown",
      sm_customer: 32,
      travel_schedule: "New York No. 1 Lake Park",
      criticality: "danger",
      status: "",
    },
    {
      key: "9",
      name_type: "John Brown",
      sm_customer: 32,
      travel_schedule: "New York No. 1 Lake Park",
      criticality: "danger",
      status: "",
    },
  ];

  return (
    <div className="file-list">
      <Table columns={tableColumns} dataSource={data} pagination={false} />
    </div>
  );
};
