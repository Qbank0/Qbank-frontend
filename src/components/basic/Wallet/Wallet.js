// REACT, STYLE, STORIES & COMPONENT
import React, { useState } from 'react';
import styles from './Wallet.module.scss';

// ASSETS
import purse from 'assets/purse.png';
import arrowRight from 'assets/arrow_right.svg';

import logoId1 from 'assets/logo_id_1.svg';
import logoId2 from 'assets/logo_id_2.svg';
import logoId3 from 'assets/logo_id_3.svg';
import logoId4 from 'assets/logo_id_4.svg';

// STORE

// 3RD PARTY
import classNames from 'classnames';

// OTHER COMPONENTS
import ImageWithBlur from 'components/basic/ImageWithBlur';
import Input from 'components/basic/Input';
import Button from 'components/basic/Button';

// UTILS

// CONFIG & DATA
const logos = {
  1: logoId1,
  2: logoId2,
  3: logoId3,
  4: logoId4
};

// COMPONENT: Wallet
const Wallet = (props) => {
  // PROPS
  const { data } = props;

  // COMPONENT/UI STATE and REFS
  const [ activeRowIndex, setActiveRowIndex ] = useState(null);

  // STORE HOOKS

  // EFFECT HOOKS

  // OTHER HOOKS

  // METHODS

  // EVENT HANDLES
  const handleRowClick = (index) => {
    if (index !== activeRowIndex) {
      setActiveRowIndex(index);
    }
    else {
      setActiveRowIndex(null);
    }
  };

  // HELPERS

  // RENDERS

  // RENDER: Wallet
  return (
    <div className={`${styles.wallet}`}>

      {/* EMPTY */}
      <div className={classNames(styles.empty, {
        [styles.hidden]: data && data.length > 0
      })}>
        <div className={styles.image}>
          <ImageWithBlur src={purse} alt='purse' />
        </div>
        <br/>
        <div className={styles.title}>
          Connect your wallet to continue
        </div>
        <div className={styles.subtitle}>
          *This project is in beta. Use at your own risk
        </div>
      </div>

      {/* DATA */}
      { data && data.length > 0 && (
        <div className={styles.data}>
          { data.map((item, index) => {
            const id = item.id;
            const imgSrc = logos[id];
            return (
              <div key={index + 'outer'}>
                {/* ROW */}
                <div key={index}
                  className={classNames(styles.row, { [styles.active]: activeRowIndex === index })}
                  onClick={() => { handleRowClick(index) }}
                >

                  {/* HEADER */}
                  <div className={styles.logo}>
                    <ImageWithBlur src={imgSrc} alt={`logo${id}`} />
                  </div>
                  <div className={styles.col1}>
                    <div className={styles.title}>
                      { item.title }
                    </div>
                    <div className={styles.subtitle}>
                      { item.subtitle }
                    </div>
                  </div>
                  <div className={styles.col2}>
                    <div className={styles.interestRate}>
                      { item.interestRate + '%' }
                    </div>
                    <div className={styles.interestRateQash}>
                      ({ item.interestRateQash + '% ' } in Qash)
                    </div>
                    <div className={styles.subtitle}>
                      Interest Rate
                    </div>
                  </div>
                  <div className={styles.col3}>
                    <div className={styles.balance}>
                      { item.balance }
                    </div>
                    <div className={styles.currency}>
                      { item.currency }
                    </div>
                    <div className={styles.subtitle}>
                      Interest Rate
                    </div>
                  </div>
                  <div className={styles.toggleArrow}>
                    <img src={arrowRight} alt='arrowRight' />
                  </div>
                </div>


                {/* ROWCONTENT */}
                { activeRowIndex === index && (
                  <div key={index + 'content'}
                    className={styles.rowContent}
                  >

                    {/* LEFT */}
                    <div className={styles.left}>

                      {/* BALANCE */}
                      <div className={styles.contentRow}>
                        Balance: {item.balance} {item.currency}
                      </div>

                      {/* INPUT */}
                      <div className={styles.contentRow}>
                        <Input value='0.00' />
                      </div>

                      {/* BUTTONS */}
                      <div className={styles.contentRow}>
                        <Button look='tertiary'>
                          25%
                        </Button>
                        <Button look='tertiary'>
                          50%
                        </Button>
                        <Button look='tertiary'>
                          75%
                        </Button>
                        <Button look='tertiary'>
                          100%
                        </Button>
                      </div>

                      {/* STAKE */}
                      <div className={styles.contentRow}>
                        <Button look='secondary' fullWidth>
                          Stake
                        </Button>
                      </div>

                      {/* TEXT */}
                      <div className={styles.contentRow}>
                        Depositing new tokens will reset your rewards! Claim them first before depositing
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div className={styles.right}>

                      {/* EARNINGS */}
                      <div className={styles.contentRow}>
                        {item.earnings} yDAY ({item.earnings} {item.currency})
                      </div>

                      {/* INPUT */}
                      <div className={styles.contentRow}>
                        <Input value='0.00' />
                      </div>

                      {/* BUTTONS */}
                      <div className={styles.contentRow}>
                        <Button look='tertiary'>
                          25%
                        </Button>
                        <Button look='tertiary'>
                          50%
                        </Button>
                        <Button look='tertiary'>
                          75%
                        </Button>
                        <Button look='tertiary'>
                          100%
                        </Button>
                      </div>

                      {/* UNSTAKE & CLAIM */}
                      <div className={styles.contentRow}>
                        <Button look='secondary' fullWidth>
                          Unstake & Claim
                        </Button>
                      </div>

                      {/* TEXT */}
                      <div className={styles.contentRow}>
                        {item.earnings} QBANK earned
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};

export default Wallet;
