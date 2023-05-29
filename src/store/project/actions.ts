import {
  FETCH_PROJECT_FAILURE,
  FETCH_PROJECT_REQUEST,
  FETCH_PROJECT_SUCCESS,
} from "./actionTypes";
import {
  FetchProjectFailure,
  FetchProjectFailurePayload,
  FetchProjectRequest,
  FetchProjectSuccess,
  FetchProjectSuccessPayload,
} from "../../typings";

export const fetchProject = (id: string): FetchProjectRequest => ({
  type: FETCH_PROJECT_REQUEST,
  id,
});

export const fetchProjectSuccess = (
  payload: FetchProjectSuccessPayload
): FetchProjectSuccess => ({
  type: FETCH_PROJECT_SUCCESS,
  payload,
});

export const fetchProjectFailure = (
  payload: FetchProjectFailurePayload
): FetchProjectFailure => ({
  type: FETCH_PROJECT_FAILURE,
  payload,
});
