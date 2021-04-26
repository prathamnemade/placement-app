import React from 'react';

export const FilterHeader = ({ text, variable }) => {
  return (
    `${text}` + ( 
      (variable.length === undefined || variable === undefined || variable === null) 
        ? "(1)" 
        : variable.length !== 0 ? `(${variable.length})` : ""
    )
  )
}