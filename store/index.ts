import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authenticationReducer } from "./authentication";

export default function initializeStore(preloadedState: any) {
  return configureStore({
    reducer: {
      authentication: authenticationReducer
    },
    devTools: true,
    middleware: [...getDefaultMiddleware()],
    preloadedState
  });
}
