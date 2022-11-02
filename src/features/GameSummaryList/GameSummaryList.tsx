import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import Button from '../../components/Elements/Button/Button';

import { useAppSelector } from '../../redux/hooks';
import IGame from '../../types/IGame';

import classes from './GameSummaryList.module.scss';

const GamesSummaryList = () => {
  const [showSummary, setShowSummary] = useState(false);
  const [sortedGameList, setGameList] = useState<IGame[]>([]);

  const gamesSummary = useAppSelector((state) => state.gamesSummary);

  useEffect(() => {
    setGameList(sortGamesByScore(gamesSummary));
  }, [gamesSummary]);

  const sortGamesByScore = (gamesSummary: IGame[]) => {
    const gamesSummaryClone = [...gamesSummary];
    const sum = (el: IGame) => el.score.reduce((a: number, b: number) => a + b);
    gamesSummaryClone.sort((a, b) => sum(b) - sum(a));
    return gamesSummaryClone;
  };

  const showGamesSummaryHandler = () => {
    setShowSummary((previousState) => !previousState);
  };

  return (
    <div className={classes.GamesSummaryList}>
      <Button
        clickAction={showGamesSummaryHandler}
        disabled={!gamesSummary.length}
        title={showSummary ? 'Hide summary' : 'Show summary'}
      />

      {showSummary ? (
        <div className={classes.GamesSummary}>
          <div className={classes.Header}>Summary of games by total score</div>
          <ul className={classes.SummaryList}>
            {sortedGameList
              ? sortedGameList.map((game: IGame) => (
                  <li key={game.id} className={classes.ResultRow}>
                    <div className={classNames(classes.Team, classes.HomeTeam)}>
                      <div className={classes.Tile}>{game.homeTeam}</div>
                      <div className={classes.Goals}>{game.score[0]}</div>
                    </div>

                    <div className={classNames(classes.Team, classes.AwayTeam)}>
                      <div className={classes.Tile}>{game.awayTeam}</div>
                      <div className={classes.Goals}>{game.score[1]}</div>
                    </div>
                  </li>
                ))
              : null}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default GamesSummaryList;
