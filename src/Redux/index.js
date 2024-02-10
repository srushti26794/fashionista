import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { rootreducers } from "./Slice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootreducers,
  middleware: [sagaMiddleware],
});

export default store;