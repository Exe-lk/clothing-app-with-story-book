import styles from './Rounded.module.scss';
import React from 'react';

const Rounded = () => {
  return (
    <div className={styles.rounded}>
      <button className={`${styles.default} ${styles.button}`}>default</button>
      <button className={`${styles.top} ${styles.button}`}>top</button>
      <button className={`${styles.bottom} ${styles.button}`}>bottom</button>
      <button className={`${styles.rounded10} ${styles.button}`}>rounded10</button>
      <button className={`${styles.rounded50} ${styles.button}`}>rounded50</button>
      <button className={`${styles.circle} ${styles.button}`}>circle</button>
    </div>
  )
}

export default Rounded

