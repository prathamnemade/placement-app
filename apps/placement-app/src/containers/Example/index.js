import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useInjectSaga } from "../../utils/injectSaga";
import { useInjectReducer } from "../../utils/injectReducer";
import reducer from "./store/reducer";
import saga from "./store/saga";
import { exampleAction } from "./store/actions";
import { exampleDataSelector } from "./store/selectors";

const key = "example";

const Example = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const dispatch = useDispatch();
  const saveExample = (data) => dispatch(exampleAction(data));
  const exampleData = useSelector(exampleDataSelector());

  return (
    <div>
      <button onClick={() => saveExample(1)}>Press</button>
      <h1>dataInStore: {JSON.stringify(exampleData)}</h1>
    </div>
  );
};

export default Example;
