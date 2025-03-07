import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/slice';
import bookReducer from './books/slice';
import planningReducer from './planning/slice';
import userReducer from './user/slice';
import themeReducer from './theme/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const themePersistConfig = {
  key: 'theme',
  storage,
  whitelist: ['mode'], // Persist only the "mode" property
};

const authPersistConfig = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    theme: persistReducer(themePersistConfig, themeReducer),
    books: bookReducer,
    planning: planningReducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
