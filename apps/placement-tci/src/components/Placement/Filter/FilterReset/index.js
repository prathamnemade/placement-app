import React from 'react'

export const FilterReset = ({ variable, onReset }) => {
  const handleReset = (e) => {
    e.stopPropagation();
    onReset();
  }

  return (
    variable.length !== 0 && (<p onClick={handleReset}>Reset</p>)
  )
}