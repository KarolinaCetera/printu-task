import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.project.pending;
const getProject = (state: AppState) => state.project.projectData;
const getError = (state: AppState) => state.project.error;

export const getProjectSelector = createSelector(
  getProject,
  (project) => project
);
export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
