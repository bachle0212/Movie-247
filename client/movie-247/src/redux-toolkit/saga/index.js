import { legacy_createStore } from "redux";
import { all } from "redux-saga/effects";
import publicSaga from "./publicSaga";


export default function* rootSaga() {
  console.log("root saga");
  yield all([publicSaga()]);
}
