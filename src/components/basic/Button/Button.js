// REACT, STYLE, STORIES & COMPONENT
import React from 'react';
import styles from './Button.module.scss';

// ASSETS

// STORE

// 3RD PARTY
import classNames from 'classnames';

// OTHER COMPONENTS

// UTILS

// CONFIG & DATA

// COMPONENT: Button
const Button = (props) => {
  // PROPS
  const {
    children, look, fullWidth,
    onClick, onBlur
  } = props;

  // COMPONENT/UI STATE and REFS

  // STORE HOOKS

  // EFFECT HOOKS

  // OTHER HOOKS

  // METHODS

  // EVENT HANDLES

  // HELPERS

  // RENDERS

  // RENDER: Button
  return (
    <button className={classNames(styles.button, styles[look], {
      [styles.fullWidth]: fullWidth
    })}
      onClick={() => { onClick && onClick()}}
      onBlur={() => { onBlur && onBlur()}}>
      { children }
    </button>
  );
};

export default Button;
