import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import authReducer from "./slices/authSlice";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const reducers = combineReducers({
  api: apiSlice.reducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: () => [apiSlice.middleware, thunk],
  devTools: true,
});

export const persistor = persistStore(store);
