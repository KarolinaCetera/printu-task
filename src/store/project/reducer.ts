import {
  FETCH_PROJECT_FAILURE,
  FETCH_PROJECT_REQUEST,
  FETCH_PROJECT_SUCCESS,
} from "./actionTypes";
import { ProjectActions, ProjectState } from "../../typings";

const initialState: ProjectState = {
  pending: false,
  projectData: null,
  error: null,
};

const projectReducer = (state = initialState, action: ProjectActions) => {
  switch (action.type) {
    case FETCH_PROJECT_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_PROJECT_SUCCESS:
      return {
        ...state,
        pending: false,
        projectData: action.payload.project,
        error: null,
      };
    case FETCH_PROJECT_FAILURE:
      return {
        ...state,
        pending: false,
        projectData: null,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default projectReducer;
