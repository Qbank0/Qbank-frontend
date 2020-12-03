// REACT, STYLE, STORIES & COMPONENT
import React from 'react';
import styles from './Toggle.module.scss';

// ASSETS

// STORE

// 3RD PARTY
import classNames from 'classnames';

// OTHER COMPONENTS

// UTILS

// CONFIG & DATA

// COMPONENT: Toggle
const Toggle = (props) => {
  // PROPS
  const { id, checked, onChange, disabled } = props;

  // COMPONENT/UI STATE and REFS

  // STORE HOOKS

  // EFFECT HOOKS

  // OTHER HOOKS

  // METHODS

  // EVENT HANDLES

  // HELPERS

  // RENDERS

  // RENDER: Toggle
  return (
    <div className={classNames(styles.toggle, {
        [styles.checked]: checked
      })}
      onClick={e => onChange(!checked)}
    >
      <input
        type="checkbox"
        className={styles.checkbox}
        disabled={disabled}
        checked={checked}
        name={id}
        id={id}
        onChange={e => onChange(e.target.checked)}
      />
      <label className={styles.label} htmlFor={id}>
        <span className={styles.inner} />
        <span className={styles.switch}/>
      </label>
    </div>
  );
};

export default Toggle;
