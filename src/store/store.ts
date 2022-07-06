import cardReduser from "./reducers/CardReducer";
import supportReducer from "./reducers/SupportReducer";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from "./reducers/UserReducer";
const rootReducer = combineReducers({
  userReducer,
  supportReducer,
  cardReduser,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
