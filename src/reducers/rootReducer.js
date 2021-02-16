import { combineReducers } from "redux";

import { aboutmeReducer } from "./aboutmeReducer";
import { authReducer } from "./authReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  aboutMe: aboutmeReducer,
});
