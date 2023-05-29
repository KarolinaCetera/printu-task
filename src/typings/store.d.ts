import {
  FETCH_PROJECT_FAILURE,
  FETCH_PROJECT_REQUEST,
  FETCH_PROJECT_SUCCESS,
} from "../store";
import { ProjectResponse, ResponseError } from "./index";

export interface FetchProjectSuccessPayload {
  project: ProjectResponse;
}

export interface FetchProjectFailurePayload {
  error: ResponseError;
}

export interface FetchProjectRequest {
  type: typeof FETCH_PROJECT_REQUEST;
  id?: string;
}

export type FetchProjectSuccess = {
  type: typeof FETCH_PROJECT_SUCCESS;
  payload: FetchProjectSuccessPayload;
};

export type FetchProjectFailure = {
  type: typeof FETCH_PROJECT_FAILURE;
  payload: FetchProjectFailurePayload;
};

export type ProjectActions =
  | FetchProjectSuccess
  | FetchProjectFailure
  | FetchProjectRequest;
