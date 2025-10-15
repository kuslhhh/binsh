import { configureStore } from '@reduxjs/toolkit';
import binReducer from './slices/binSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      bin: binReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];