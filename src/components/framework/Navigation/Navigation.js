// REACT, STYLE, STORIES & COMPONENT
import React from 'react';
import styles from './Navigation.module.scss';

// ASSETS
import { ReactComponent as Bank} from 'assets/bank.svg';

// STORE

// 3RD PARTY

// OTHER COMPONENTS

// UTILS

// CONFIG & DATA

// COMPONENT: Navigation
const Navigation = (props) => {
  // PROPS
  const { onStake, onUnstake } = props;

  // COMPONENT/UI STATE and REFS

  // STORE HOOKS

  // EFFECT HOOKS

  // OTHER HOOKS

  // METHODS

  // EVENT HANDLES

  // HELPERS

  // RENDERS

  // RENDER: Navigation
  return (
    <nav className={`${styles.navigation}`}>

      {/* TITLE */}
      <div className={styles.title}>
        <Bank/> <span>Treasury Balance</span>
      </div>

      {/* LIST */}
      <ul className={styles.list}>
        <li className={styles.highlight}
          onClick={() => onStake()}
          >
          Stake QBANK LP (0)
        </li>
        <li className={styles.highlight}
          onClick={() => onUnstake()}
        >
          Unstake QBANK LP
        </li>
        <li>No ETH to Redeem Yet</li>
      </ul>
    </nav>
  );
};

export default Navigation;
