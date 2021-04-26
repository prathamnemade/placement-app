import { createSelector } from "reselect";

const exampleSelector = (state) => state.example;

export const exampleDataSelector = () =>
  createSelector(exampleSelector, (data) => data?.myData);
