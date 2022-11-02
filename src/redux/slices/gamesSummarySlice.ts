import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IGame from '../../types/IGame';

const initialState: IGame[] = [];

const gamesSummarySlice = createSlice({
  name: 'gamesSummary',
  initialState,
  reducers: {
    addGameToSummary(state, action: PayloadAction<IGame>) {
      state.unshift(action.payload);
    },
  },
});

export const { addGameToSummary } = gamesSummarySlice.actions;
export default gamesSummarySlice.reducer;
