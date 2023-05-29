import { combineReducers } from "redux";
import projectReducer from "./project/reducer";

const rootReducer = combineReducers({
  project: projectReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
