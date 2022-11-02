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
    startGame(state, action: PayloadAction<number>) {
      state.id = action.payload;
    },
    updateScore(state, action: PayloadAction<Array<number>>) {
      state.score = action.payload;
    },
    resetGame(state) {
      Object.assign(state, initialState);
    },
    renameHomeTeam(state, action: PayloadAction<string>) {
      state.homeTeam = action.payload;
    },
    renameAwayTeam(state, action: PayloadAction<string>) {
      state.awayTeam = action.payload;
    },
  },
});

export const { startGame, updateScore, resetGame, renameHomeTeam, renameAwayTeam } = scoreBoardSlice.actions;
export default scoreBoardSlice.reducer;
