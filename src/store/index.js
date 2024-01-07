import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";

// import logger from "redux-logger";
import { authSlice } from "./api/auth";
import { userApi } from "./api/user";
import todoReducer from "./slice/todo.slice";

const apiMiddlewares = [userApi.middleware];

const store = configureStore({
  reducer: {
    todos: todoReducer,
    [userApi.reducerPath]: userApi.reducer,
    auth: authSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      // .concat(logger)
      .concat(...apiMiddlewares),
});

setupListeners(store.dispatch);
export default store;
