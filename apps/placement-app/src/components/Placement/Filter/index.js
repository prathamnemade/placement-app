import {CheckboxGroup} from '@placement-app/shared/checkbox'
import { Title, Paragraph } from '@placement-app/shared/typography';
import { Col, Collapse, Layout, Row, Select } from 'antd';
import React from 'react';
import { ContractType, locations, SourceMarket, TravelType } from './constants';
import { FilterHeader } from './FilterHeader';
import { FilterReset } from './FilterReset';
import './index.scss';

/**
 * Filter Sider Component for Placement Panel
 * @returns React.ReactNode
 */
export const Filter = () => {
  const [location, setLocation] = React.useState([]);
  const [sourceMarkets, setSourceMarkets] = React.useState([]);
  const [travelType, setTravelType] = React.useState([]);
  const [contractType, setContractType] = React.useState([]);
  const [totalfiltersCount, setTotalFiltersCount] = React.useState(0)
  const changeLocation = (value) => setLocation(value);

  React.useEffect(() => {
    setTotalFiltersCount(
      location.length + sourceMarkets.length + travelType.length + contractType.length
    )
  }, [location, sourceMarkets, travelType, contractType])

  const onClearAll = () => {
    if (totalfiltersCount > 0) {
      setLocation([])
      setContractType([])
      setSourceMarkets([])
      setTravelType([])
    }
  }

  return (
    <Layout.Sider
      width={236}
      className="placement-filter"
    >
      <Row
        align="middle"
        justify="space-between"
        className="placement-filter_heading"
      >
        <Col span={12} className="filter-title">
          <Title
            level={5}
            children={
              `Filters` + (totalfiltersCount ? `(${totalfiltersCount})` : "")
            }
          />
        </Col>
        <Col span={12} className={"clear-option" + (totalfiltersCount ? " active" : "")}>
          <Paragraph
            type="secondary"
            children="Clear All"
            style={{ marginBottom: '0.3rem' }}
            onClick={onClearAll}
          />
        </Col>
      </Row>
      <Collapse
        expandIconPosition={'right'}
        bordered={false}
        className="placement-filter_menu"
      >
        <Collapse.Panel
          header={<FilterHeader text="Location" variable={location} />}
          key="1"
          extra={
            <FilterReset
              variable={location}
              onReset={() => setLocation([])}
            />
          }
          children={
            <Select
              showSearch
              value={location}
              onChange={changeLocation}
              style={{ width: 200 }}
              placeholder="Select a location"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              children={locations.map((e) => (
                <Select.Option value={e.value} children={e.label} />
              ))}
              dropdownStyle={{ position: "fixed" }}
            />
          }
        />

        <Collapse.Panel
          header={<FilterHeader text="Contract Types" variable={contractType} />}
          key="2"
          extra={
            <FilterReset
              variable={contractType}
              onReset={() => setContractType([])}
            />
          }
          children={
            <CheckboxGroup
              options={ContractType}
              value={contractType}
              onChange={(values) => setContractType(values)}
            />
          }
        />

        <Collapse.Panel
          header={
            "Travel Type" + (travelType.length !== 0 ? `(${travelType.length})` : "")
          }
          key="3"
          extra={
            <FilterReset
              variable={travelType}
              onReset={() => setTravelType([])}
            />
          }
          children={
            <CheckboxGroup
              options={TravelType}
              value={travelType}
              onChange={(values) => setTravelType(values)}
            />
          }
        />

        <Collapse.Panel
          header={
            "Source Markets" + (sourceMarkets.length !== 0 ? `(${sourceMarkets.length})` : "")
          }
          key="4"
          extra={
            <FilterReset
              variable={sourceMarkets}
              onReset={() => setSourceMarkets([])}
            />
          }
          children={
            <CheckboxGroup
              options={SourceMarket}
              value={sourceMarkets}
              onChange={(values) => setSourceMarkets(values)}
            />
          }
        />
        
      </Collapse>
    </Layout.Sider>
  );
};
