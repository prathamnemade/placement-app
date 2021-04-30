import { Button } from "@placement-app/shared/buttons";
import React from "react";
import "./index.scss";

export const AssignedOptions = ({ onReAssign, onContact }) => {
  return (
    <>
      <Button
        children={"Re-Assign"}
        className="btn bordered re-assign"
        onClick={onReAssign}
      />
      <Button
        children={"Contact FHE"}
        className="btn confirm-btn"
        onClick={onContact}
      />
    </>
  );
};

export const ConfirmOption = ({ onClick }) => {
  return (
    <Button
      children={"Confirm"}
      className="btn confirm-btn"
      onClick={onClick}
    />
  );
};

export const AssignAction = ({ onClick }) => {
  return (
    <Button
      children={"Assign to File Handler"}
      className="btn confirm-btn"
      onClick={onClick}
    />
  );
};
