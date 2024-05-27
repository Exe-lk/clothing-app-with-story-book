import styles from './Size.module.scss';
import React from 'react';

const Size = () => {
  return (
    <div className={styles.size}>
      <button className={`${styles.small} ${styles.button}`}>small</button>
      <button className={`${styles.medium} ${styles.button}`}>medium</button>
      <button className={`${styles.large} ${styles.button}`}>large</button>
    </div>
  )
}

export default Size

