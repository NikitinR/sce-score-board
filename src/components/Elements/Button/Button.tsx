import React from 'react';

import classes from './Button.module.scss';

interface ButtonProps {
  title: string;
  clickAction: () => void;
  disabled?: boolean;
}

const Button = ({ title, clickAction, disabled }: ButtonProps) => {
  return (
    <button className={classes.Button} type='button' onClick={clickAction} disabled={disabled}>
      {title}
    </button>
  );
};

export default Button;
