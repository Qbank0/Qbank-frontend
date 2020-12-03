import React, { useState } from 'react';
import styles from './App.module.scss';

// ASSETS
import arrow from 'assets/arrow.svg';
import { ReactComponent as Currency } from 'assets/currency.svg';

// 3RD PARTY
import classNames from 'classnames';

// OTHER COMPONENTS
import { Header } from 'components/framework/Header';
import { Navigation } from 'components/framework/Navigation';
import { Overlay } from 'components/framework/Overlay';
import { Wallet } from 'components/basic/Wallet';

function App() {

  // PROPS

  // COMPONENT/UI STATE and REFS
  const [ walletData, setWalletData ] = useState([]);
  const [ walletName, setWalletName ] = useState('');
  const [ showPopout, setShowPopout ] = useState(false);
  const [ walletConnected, setWalletConnected ] = useState(false);
  const [ overlay, setOverlay ] = useState(null);


  // STORE HOOKS

  // EFFECT HOOKS

  // OTHER HOOKS

  // METHODS

  // EVENT HANDLES
  const handleWalletConnect = (showPopout, walletConnected) => {
    if (!walletConnected) { // alternative !(walletConnected && !showPopout) => show after popout is closed
      setWalletData([]);
      setWalletName('');
    }
    else {
      setWalletName('0x0D83...c2AF');
      setWalletData([
        {
          id: 1,
          title: 'DAI',
          subtitle: 'DAI Stablecoin',
          interestRate: '34.46',
          interestRateQash: '23.91',
          balance: '5.0000',
          currency: 'DAI',
          earnings: '0.00'
        },
        {
          id: 2,
          title: 'USD Coin',
          subtitle: 'USD/C',
          interestRate: '30.72',
          interestRateQash: '23.91',
          balance: '0.00',
          currency: 'DAI',
          earnings: '0.00'
        },
        {
          id: 3,
          title: 'USDT',
          subtitle: 'Tether USD',
          interestRate: '30.70',
          interestRateQash: '23.91',
          balance: '0.00',
          currency: 'USDT',
          earnings: '0.00'
        },
        {
          id: 4,
          title: 'TUSD',
          subtitle: 'True USD',
          interestRate: '25.09',
          interestRateQash: '23.91',
          balance: '0.00',
          currency: 'TUSD',
          earnings: '0.00'
        }
      ])
    }
  };

  // HELPERS

  // RENDERS

  // RENDER: App
  return (
    <div className={styles.app}>

      {/* HEADER */}
      <Header
        info='893.95 QBANK burned'
        walletName={walletName}
        showPopout={showPopout}
        walletConnected={walletConnected}
        onChangePopout={(showPopout) => { setShowPopout(showPopout); handleWalletConnect(showPopout, walletConnected) }}
        onChangeConnected={(walletConnected) => { setWalletConnected(walletConnected); handleWalletConnect(showPopout, walletConnected) }}
      />

      <div className={styles.layout}>

        {/* NAVIGATION */}
        <Navigation
          onStake={() => { walletConnected && setOverlay('stake'); }}
          onUnstake={() => { walletConnected && setOverlay('unstake'); }}
        />

        {/* MAIN */}
        <main className={styles.main}>

          {/* TITLE */}
          <div className={styles.title}>
            <Currency/>
            <span>Your Optimized QBANK farm</span>
          </div>

          {/* WALLET */}
          <Wallet data={walletData} />

        </main>

        {/* EMPTYARROW */}
        <div className={styles.emptyArrowContainer}>
          <div className={classNames(styles.emptyArrow, {
            [styles.hidden]: walletData && walletData.length > 0
          })}>
            <img src={arrow} alt='arrow' />
          </div>
        </div>
      </div>


      {/* OVERLAY */}
      { overlay && (
        <Overlay
          type={overlay}
          onClose={() => setOverlay(null)}>
        </Overlay>
      )}
    </div>
  );
}

export default App;
