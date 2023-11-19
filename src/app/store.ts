import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { rootReducer } from "./root";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type AppDispatch = typeof store.dispatch;
