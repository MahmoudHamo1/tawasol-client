import { configureStore } from "@reduxjs/toolkit";
import { setAuthToken } from "../utils";

import rootReducer from "./modules";

const initialState = {};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // preloadedState: initialState,
  devTools: true,
});

let currentState = store.getState();
store.subscribe(() => {
  let previousState = currentState;
  currentState = store.getState();
  if (previousState.users.token !== currentState.users.token) {
    const token = currentState.users.token;
    setAuthToken(token);
  }
});

export default store;
