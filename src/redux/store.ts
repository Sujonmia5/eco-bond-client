import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./features/postSlice";
import { apiMiddleware, baseAPI } from "./api/api";
import AuthReducer from "./features/authSlice";
import storage from "redux-persist/lib/storage";
import { PERSIST, persistReducer, REGISTER } from "redux-persist";
import { persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, AuthReducer);

export const store = configureStore({
  reducer: {
    [baseAPI.reducerPath]: baseAPI.reducer,
    posts: PostReducer,
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REGISTER, PERSIST],
      },
    }).concat(apiMiddleware),
});

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
