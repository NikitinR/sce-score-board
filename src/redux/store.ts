import { configureStore } from '@reduxjs/toolkit';
import scoreBoardReducer from './slices/scoreBoardSlice';

export const store = configureStore({
  reducer: {
    scoreBoard: scoreBoardReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
