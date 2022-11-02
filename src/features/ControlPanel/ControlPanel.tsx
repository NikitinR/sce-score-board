import React, { useState } from 'react';
import classNames from 'classnames';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { startGame, updateScore, resetGame, renameHomeTeam, renameAwayTeam } from '../../redux/slices/scoreBoardSlice';
import { addGameToSummary } from '../../redux/slices/gamesSummarySlice';

import Button from '../../components/Elements/Button/Button';
import Input from '../../components/Elements/Input/Input';

import classes from './ControlPanel.module.scss';

const ControlPanel = () => {
  const [startedStatus, setStartedStatus] = useState(false);

  const scoreBoard = useAppSelector((state) => state.scoreBoard);
  const dispatch = useAppDispatch();

  const renameTeamHandler = (e: React.ChangeEvent<HTMLInputElement>, actionType: string) => {
    const teamName = e.target.value;

    if (actionType === 'homeTeam') {
      dispatch(renameHomeTeam(teamName));
    } else {
      dispatch(renameAwayTeam(teamName));
    }
  };

  const startGameHandler = () => {
    dispatch(startGame(Math.floor(Math.random() * 100)));
    setStartedStatus(true);
  };

  const updateScoreHandler = (score: Array<number>) => {
    dispatch(updateScore(score));
  };

  const finishGameHandler = () => {
    dispatch(addGameToSummary(scoreBoard));
    dispatch(resetGame());
    setStartedStatus(false);
  };

  return (
    <>
      <div className={classes.ControlPanel}>
        <div className={classes.TitleEditor}>
          <div className={classes.InputWrapper}>
            <Input
              label={'Home team'}
              disabled={startedStatus}
              inputValue={scoreBoard.homeTeam}
              changeAction={(e) => renameTeamHandler(e, 'homeTeam')}
              placeholder={'Enter home team title'}
            />
          </div>
          <div className={classes.InputWrapper}>
            <Input
              label={'Away team'}
              disabled={startedStatus}
              inputValue={scoreBoard.awayTeam}
              changeAction={(e) => renameTeamHandler(e, 'awayTeam')}
              placeholder={'Enter away team title'}
            />
          </div>
        </div>

        <div className={classes.GameActions}>
          <div className={classNames(classes.ControlGroup, classes.StartEnd)}>
            <div className={classes.ButtonWrapper}>
              <Button
                clickAction={startGameHandler}
                disabled={startedStatus || scoreBoard.homeTeam.length < 1 || scoreBoard.awayTeam.length < 1}
                title='Start'
              />
            </div>
            <div className={classes.ButtonWrapper}>
              <Button clickAction={finishGameHandler} disabled={!startedStatus} title='Finish' />
            </div>
          </div>
          <div className={classNames(classes.ControlGroup, classes.UpdateScore)}>
            <div className={classes.ButtonWrapper}>
              <Button
                clickAction={() => updateScoreHandler([scoreBoard.score[0] + 1, scoreBoard.score[1]])}
                disabled={!startedStatus}
                title='Home team + 1'
              />
            </div>
            <div className={classes.ButtonWrapper}>
              <Button
                clickAction={() => updateScoreHandler([scoreBoard.score[0], scoreBoard.score[1] + 1])}
                disabled={!startedStatus}
                title='Away team + 1'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ControlPanel;
