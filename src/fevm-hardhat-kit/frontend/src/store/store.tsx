import { configureStore } from '@reduxjs/toolkit';
import walletReducer from './walletSlice';
import contractReducer from './contractSlice';

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
    contract: contractReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;