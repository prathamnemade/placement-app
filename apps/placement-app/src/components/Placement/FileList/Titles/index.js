import { Text } from "@placement-app/shared/typography";
import React from "react";
import './index.scss';

/**
 * Render title for list table columns.
 * @param {*} param0 
 * @returns 
 */
export const FileListTitles = ({ title, onSort }) => {
  return (
    <>
      <Text children={title} className="title" />
      <Text children={<>&#x021F5;</>} className="title-icon" onClick={onSort} />
    </>
  );
};
