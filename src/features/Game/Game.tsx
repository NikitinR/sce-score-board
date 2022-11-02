import React from 'react';

import { useAppSelector } from '../../redux/hooks';

import ScoreBoard from '../ScoreBoard/ScoreBoard';

import classes from './Game.module.scss';

const Game = () => {
  const scoreBoard = useAppSelector((state) => state.scoreBoard);

  return (
    <div className={classes.Game}>
      <ScoreBoard {...scoreBoard} />
    </div>
  );
};

export default Game;
