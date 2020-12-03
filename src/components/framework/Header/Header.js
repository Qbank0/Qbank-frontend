// REACT, STYLE, STORIES & COMPONENT
import React from 'react';
import styles from './Header.module.scss';

// ASSETS
import logo from 'assets/logo.png';
import metamask from 'assets/metamask.svg';

// STORE

// 3RD PARTY

// OTHER COMPONENTS
import { Button } from 'components/basic/Button';
import { Toggle } from 'components/basic/Toggle';
import { ImageWithBlur } from 'components/basic/ImageWithBlur';

// UTILS

// CONFIG & DATA

// COMPONENT: Header
const Header = (props) => {
  // PROPS
  const {
    info, walletName,
    showPopout, walletConnected,
    onChangePopout, onChangeConnected
  } = props;

  // STORE HOOKS

  // EFFECT HOOKS

  // OTHER HOOKS

  // METHODS

  // EVENT HANDLES

  // HELPERS

  // RENDERS

  // RENDER: Header
  return (
    <header className={`${styles.header}`}>

      {/* CONTENT */}
      <div className={styles.content}>

        {/* LEFT */}
        <div className={styles.left}>
          <a className={styles.logo} href="#logo">
            <div className={styles.image}>
              <ImageWithBlur src={logo} alt='logo' />
            </div>
            <div>
              <span className={styles.title}>Qbank</span>
              <br/>
              <span className={styles.subtitle}>Next-Generation QBANK Farming</span>
            </div>
          </a>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>

          {/* INFO */}
          <div className={styles.info}> {info} </div>

          {/* BUTTONS */}
          <Button look='secondary'>QBANK Mechanics</Button>

          {/* POPOUT */}
          <div tabIndex='1' className={styles.popoutContainer}>

            <Button look='primary'
              onClick={() => {
                onChangePopout(!showPopout);
              }}>
              { walletName || 'Connect wallet' }
            </Button>

            {/* POPOUT */}
            { showPopout && (
              <div className={styles.popout}>
                <div className={styles.row}
                  onClick={() => onChangeConnected(!walletConnected)}
                >
                  {/* METAMASK */}
                  <img className={styles.metamask}
                    src={metamask} alt='metamask'
                  />

                  {/* TOGGLE */}
                  <div className={styles.toggle}>
                    <Toggle name='metamask'
                      checked={walletConnected}
                      disabled={true}
                      onChange={(checked) => { onChangeConnected(checked) }}
                    />
                  </div>
                </div>

                {/* WARNING */}
                { walletConnected && (
                  <div className={styles.rowText}>
                    <span className={styles.warning}>
                      This is a BETA product and there’s a HIGH chance you may lose REAL money!
                    </span>
                    We aren’t responsible for whatever loss you incur in using the product including those related to bugs or exploits in the smart contracts, bugs or exploits in the user interface and everything else. If you use this product you accept the risks associated with using a Beta product and you may lose real money.
                  </div>
                )}
              </div>
            )}
          </div>

        </div>

        {/* CLICKOVERLAY */}
        { showPopout && (
          <div className={styles.clickOverlay}
            onClick={() => { onChangePopout(false) }}></div>
        )}
      </div>
    </header>
  );
};

export default Header;
