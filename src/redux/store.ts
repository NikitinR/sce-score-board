import { configureStore } from '@reduxjs/toolkit';
import scoreBoardReducer from './slices/scoreBoardSlice';
import gamesSummaryReducer from './slices/gamesSummarySlice';

export const store = configureStore({
  reducer: {
    scoreBoard: scoreBoardReducer,
    gamesSummary: gamesSummaryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
