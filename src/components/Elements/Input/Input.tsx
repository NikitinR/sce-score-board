import React from 'react';

import classes from './Input.module.scss';

interface InputProps {
  inputValue: string;
  disabled?: boolean;
  changeAction: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label: string;
}

const Input = ({ inputValue, changeAction, disabled, placeholder }: InputProps) => {
  return (
    <input
      className={classes.Input}
      type='text'
      disabled={disabled}
      value={inputValue}
      onChange={changeAction}
      placeholder={placeholder}
    />
  );
};

export default Input;
