import { combineReducers } from "redux";

import { aboutmeReducer } from "./aboutmeReducer";
import { authReducer } from "./authReducer";
import { resumeReducer } from "./resumeReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  aboutMe: aboutmeReducer,
  resume: resumeReducer,
});
