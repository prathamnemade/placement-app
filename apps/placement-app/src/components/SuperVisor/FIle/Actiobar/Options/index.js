import { Button } from "@placement-app/shared/buttons";
import React from "react";
import "./index.scss";

export const AssignedOptions = (props) => {
  return <div></div>;
};

export const ConfirmOption = (props) => {
  return <Button children={"Confirm"} className="btn confirm-btn" />;
};

export const AssignAction = (props) => {
  return (
    <Button children={"Assign to File Handler"} className="btn confirm-btn" />
  );
};
