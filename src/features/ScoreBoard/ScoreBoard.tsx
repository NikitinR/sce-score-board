import React from 'react';
import IGame from '../../types/IGame';
import classNames from 'classnames';

import classes from './ScoreBoard.module.scss';

const ScoreBoard = ({ homeTeam, awayTeam, score }: IGame) => {
  return (
    <div className={classes.ScoreBoard}>
      <div className={classes.Header}>Score Board</div>
      <div className={classes.Body}>
        <div className={classNames(classes.Score, classes.HomeTeam)}>
          <div className={classes.Title}>{homeTeam ? homeTeam : 'Team'}</div>
          <div className={classes.Goals}>{score[0]}</div>
        </div>
        <div className={classNames(classes.Score, classes.AwayTeam)}>
          <div className={classes.Title}>{awayTeam ? awayTeam : 'Team'}</div>
          <div className={classes.Goals}>{score[1]}</div>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
