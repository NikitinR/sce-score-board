import React from 'react';
import classNames from 'classnames';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { updateScore } from '../../redux/slices/scoreBoardSlice';

import Button from '../../components/Elements/Button/Button';
import Input from '../../components/Elements/Input/Input';

import classes from './ControlPanel.module.scss';

const ControlPanel = () => {
  const scoreBoard = useAppSelector((state) => state.scoreBoard);
  const dispatch = useAppDispatch();

  const updateScoreHandler = (score: Array<number>) => {
    dispatch(updateScore(score));
  };

  const stubAction = () => console.log('action works');

  return (
    <>
      <div className={classes.ControlPanel}>
        <div className={classes.TitleEditor}>
          <div className={classes.InputWrapper}>
            <Input
              label={'Home team'}
              disabled={false}
              inputValue={scoreBoard.homeTeam}
              changeAction={stubAction}
              placeholder={'Enter home team title'}
            />
          </div>
          <div className={classes.InputWrapper}>
            <Input
              label={'Away team'}
              disabled={false}
              inputValue={scoreBoard.awayTeam}
              changeAction={stubAction}
              placeholder={'Enter away team title'}
            />
          </div>
        </div>

        <div className={classes.GameActions}>
          <div className={classNames(classes.ControlGroup, classes.StartEnd)}>
            <div className={classes.ButtonWrapper}>
              <Button clickAction={stubAction} disabled={false} title='Start' />
            </div>
            <div className={classes.ButtonWrapper}>
              <Button clickAction={stubAction} disabled={false} title='Finish' />
            </div>
          </div>
          <div className={classNames(classes.ControlGroup, classes.UpdateScore)}>
            <div className={classes.ButtonWrapper}>
              <Button
                clickAction={() => updateScoreHandler([scoreBoard.score[0] + 1, scoreBoard.score[1]])}
                disabled={false}
                title='Home team + 1'
              />
            </div>
            <div className={classes.ButtonWrapper}>
              <Button
                clickAction={() => updateScoreHandler([scoreBoard.score[0], scoreBoard.score[1] + 1])}
                disabled={false}
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
