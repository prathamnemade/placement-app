import { takeLatest, all, call } from "redux-saga/effects";
import { EXAMPLE } from "./constants";

export function* exampleSaga({ data }) {
  try {
    yield call(resetPasswordAPI, data);
  } catch (err) {
    console.log("err", err);
  }
}

const resetPasswordAPI = (data) => {
  console.log("data - under sada", data);
};

export default function* rootSaga() {
  yield all([yield takeLatest(EXAMPLE, exampleSaga)]);
}
