import React from 'react';

import { useAppSelector } from '../../redux/hooks';

import ControlPanel from '../ControlPanel/ControlPanel';
import ScoreBoard from '../ScoreBoard/ScoreBoard';

import classes from './Game.module.scss';

const Game = () => {
  const scoreBoard = useAppSelector((state) => state.scoreBoard);

  return (
    <div className={classes.Game}>
      <ScoreBoard {...scoreBoard} />
      <ControlPanel />
    </div>
  );
};

export default Game;
