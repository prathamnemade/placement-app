import { Col, Row } from "antd";
import React from "react";
import "./index.scss";
import { ItineraryHeaderBox } from "./headerBox";

/**
 *
 * @param {*} Props
 * @returns
 */
export const ItineraryHeader = ({
  activeIndex,
  setActiveIndex,
  headerList,
  ...props
}) => {
  return (
    <div className="itinerary-header-wrapper">
      <Row gutter={[30, 30]} className="itinerary-header-container">
        {headerList &&
          headerList.map((val, key) => (
            <Col key={key}>
              <ItineraryHeaderBox
                selected={activeIndex}
                details={val}
                index={key}
                setActiveIndex={setActiveIndex}
              />
            </Col>
          ))}
      </Row>
    </div>
  );
};
