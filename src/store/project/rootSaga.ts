import { all, fork } from "redux-saga/effects";
import projectSaga from "./projectSagas";

export default function* rootSaga(id: string) {
  yield all([fork(projectSaga)]);
}
