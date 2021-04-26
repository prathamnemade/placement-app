/*
 *
 * Example reducer
 *
 */
import produce from "immer";
import { EXAMPLE } from "./constants";

export const initialState = {
  myData: 0,
};

/* eslint-disable default-case, no-param-reassign */
const exampleReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case EXAMPLE:
        draft.myData += action.data;
        break;
    }
  });

export default exampleReducer;
