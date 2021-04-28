import { EnvironmentFilled } from "@ant-design/icons";
import React from "react";
import "./index.scss";

/**
 *
 * @param {*} props
 * @returns
 */
export const ItineraryHeaderBox = ({
  details,
  selected,
  setActiveIndex,
  index,
}) => {
  return (
    <div
      className={`rectangle-box ${
        selected === index ? "rectangle-box-selected" : ""
      }`}
      onClick={() => setActiveIndex(index)}
    >
      <div className="rectangle-box-title">
        <EnvironmentFilled /> {details.city}
      </div>
      <div className="rectangle-box-date">
        {details.fromDate} {"->"} {details.toDate}
      </div>
    </div>
  );
};
