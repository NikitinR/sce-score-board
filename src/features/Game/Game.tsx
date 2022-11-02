import React from 'react';

import ScoreBoard from '../ScoreBoard/ScoreBoard';

import classes from './Game.module.scss';

const Game = () => {
  return (
    <div className={classes.Game}>
      <ScoreBoard />
    </div>
  );
};

export default Game;
