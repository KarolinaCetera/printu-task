import { AxiosError } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchProjectFailure, fetchProjectSuccess } from "./actions";
import { FETCH_PROJECT_REQUEST } from "./actionTypes";
import { ProjectResponse } from "../../typings";
import { getProject } from "../../common";

function* fetchProjectSaga({ id }: { id: string; type: string }) {
  try {
    const response: { data: ProjectResponse } = yield call(getProject, id);

    yield put(
      fetchProjectSuccess({
        project: response.data,
      })
    );
  } catch (e) {
    if (e instanceof AxiosError) {
      yield put(
        fetchProjectFailure({
          error: {
            message: e.message,
            status: e.response?.status as number,
          },
        })
      );
    }
  }
}

export default function* projectSaga() {
  yield takeEvery(FETCH_PROJECT_REQUEST, fetchProjectSaga);
}
