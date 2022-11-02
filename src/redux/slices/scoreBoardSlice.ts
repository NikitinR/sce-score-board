import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import IGame from '../../types/IGame';

const initialState: IGame = {
  id: 0,
  homeTeam: '',
  awayTeam: '',
  score: [0, 0],
};

const scoreBoardSlice = createSlice({
  name: 'scoreBoard',
  initialState,
  reducers: {
    updateScore(state, action: PayloadAction<Array<number>>) {
      state.score = action.payload;
    },
  },
});

export const { updateScore } = scoreBoardSlice.actions;
export default scoreBoardSlice.reducer;
