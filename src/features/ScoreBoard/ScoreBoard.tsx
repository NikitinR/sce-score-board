import React from 'react';
import classNames from 'classnames';

import classes from './ScoreBoard.module.scss';

const ScoreBoard = () => {
  return (
    <div className={classes.ScoreBoard}>
      <div className={classes.Header}>Score Board</div>
      <div className={classes.Body}>
        <div className={classNames(classes.Score, classes.HomeTeam)}>
          <div className={classes.Title}>Team</div>
          <div className={classes.Goals}>0</div>
        </div>
        <div className={classNames(classes.Score, classes.AwayTeam)}>
          <div className={classes.Title}>Team</div>
          <div className={classes.Goals}>0</div>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
