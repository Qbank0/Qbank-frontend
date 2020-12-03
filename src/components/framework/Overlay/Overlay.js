// REACT, STYLE, STORIES & COMPONENT
import React, { useState } from 'react';
import styles from './Overlay.module.scss';

// ASSETS

// STORE

// 3RD PARTY

// OTHER COMPONENTS
import { Input } from 'components/basic/Input';
import { Button } from 'components/basic/Button';

// UTILS

// CONFIG & DATA

// COMPONENT: Overlay
const Overlay = (props) => {
  // PROPS
  const { type, onClose } = props;

  // COMPONENT/UI STATE and REFS
  const [ processing, setProcessing ] = useState(false);

  // STORE HOOKS

  // EFFECT HOOKS

  // OTHER HOOKS

  // METHODS

  // EVENT HANDLES

  // HELPERS

  // RENDERS

  // RENDER: Overlay
  return (
    <div className={`${styles.overlay}`}
      onClick={() => { onClose() }}
    >
      <div className={styles.content}
        onClick={(e) => { e.preventDefault(); e.stopPropagation();}}>
        <div className={styles.text}>
          Enter how many  LP shares you want to { type }
        </div>
        <Input value={0.1} />
        <div className={styles.buttons}>
          <Button look='secondary'
            onClick={() => setProcessing(!processing)}>
            { processing && 'Processing...' }
            { !processing && (type === 'stake' ? 'Stake Amount' : 'Unstake Amount') }
          </Button>
          <Button
            onClick={() => onClose()}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
